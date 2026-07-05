import express, { json } from "express";
import { CreateUserSchema, CreateAvatarSchema, SigninSchema } from "./types";
import { prisma } from "./db";
import { uuid } from "uuidv4";
import { createImage } from "./image";
import dotenv from "dotenv";
import { authMiddleware } from "./middleware";
import jwt from "jsonwebtoken";
import cors from "cors";
import { cloudinary } from "./cloudinary";
import fs from "fs";

const app = express();
dotenv.config();
app.use(express.json());

app.use(cors({
  origin: ["https://your-frontend.vercel.app", "http://localhost:3000"],
  credentials: true
}));

app.use("/assets", express.static("assets"));

app.post("/signup", async (req, res) => {
    try {
        const { success, data } = CreateUserSchema.safeParse(req.body);

        if (!success) {
            return res.status(400).json(data);
        }

        const user = await prisma.user.create({
            data: {
                username: data.username,
                password: data.password
            }
        });

        res.json(user);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

app.post("/signin", async (req, res) => {
    const result = SigninSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json(result.error);
    }

    const { username, password } = result.data;

    const response = await prisma.user.findUnique({
        where: {
            username
        }
    });

    if (!response) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const token = jwt.sign(
        {
            userId: response.id
        },
        process.env.JWT_SECRET!,
        {
            expiresIn: "7d"
        }
    );

    return res.status(200).json({
        token
    });
});

app.post("/avatar", authMiddleware, async (req, res) => {
    try {
        const { success, data } = CreateAvatarSchema.safeParse(req.body);

        if (!success) {
            return res.status(400).json({
                message: "Invalid request body"
            });
        }

        const fileName = `${uuid()}.png`;
        const filePath = `assets/${fileName}`;

        

        await createImage(data.prompt, filePath);

        console.log("2. Image created:", filePath);

        const uploadResult = await cloudinary.uploader.upload(filePath, {
            folder: "avatars"
        });

        

        // Delete temporary local image
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        const avatar = await prisma.avatar.create({
            data: {
                userId: req.userId,
                name: data.name
            }
        });

        console.log("4. Avatar created");

        await prisma.avatarImage.create({
            data: {
                avatarId: avatar.id,
                type: "Model",
                url: uploadResult.secure_url,
                cloudinaryPublicId: uploadResult.public_id
            }
        });

        console.log("5. Avatar image saved");

        return res.status(201).json({
            success: true,
            avatarId: avatar.id,
            image: uploadResult.secure_url
        });

    } catch (error) {
        console.error("CREATE AVATAR ERROR:", error);

        return res.status(500).json({
            message: "Failed to create avatar",
            error: error instanceof Error
                ? error.message
                : String(error)
        });
    }
});

app.get("/avatar/:avatarId", async (req, res) => {
    try {
        const { avatarId } = req.params;

        const avatar = await prisma.avatar.findUnique({
            where: {
                id: avatarId
            },
            include: {
                avatarImages: true
            }
        });

        if (!avatar) {
            return res.status(404).json({
                message: "Avatar not found"
            });
        }

        const images = avatar.avatarImages.map(img => ({
            ...img,
            url: `http://localhost:3000${img.url}`
        }));

        return res.json({
            ...avatar,
            avatarImages: images
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

app.get("/avatars", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;

        const avatars = await prisma.avatar.findMany({
            where: {
                userId
            },
            include: {
                avatarImages: true
            }
        });

        return res.json(avatars);

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

app.delete("/avatar/:avatarId", authMiddleware, async (req, res) => {
    try {
        const avatarId = req.params.avatarId;
        const userId = req.userId;

        const avatar = await prisma.avatar.findFirst({
            where: {
                id: avatarId,
                userId
            }
        });

        if (!avatar) {
            return res.status(404).json({
                message: "Avatar not found"
            });
        }

        await prisma.avatar.delete({
            where: {
                id: avatarId
            }
        });

        return res.json({
            message: "Avatar deleted successfully"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to delete avatar"
        });
    }
});

app.delete("/avatars", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;

        await prisma.avatar.deleteMany({
            where: {
                userId
            }
        });

        return res.status(200).json({
            message: "All avatars deleted successfully"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to delete avatars"
        });
    }
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});