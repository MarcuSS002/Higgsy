"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const types_1 = require("./types");
const db_1 = require("./db");
const uuidv4_1 = require("uuidv4");
const image_1 = require("./image");
const dotenv_1 = __importDefault(require("dotenv"));
const middleware_1 = require("./middleware");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cors_1 = __importDefault(require("cors"));
const cloudinary_1 = require("./cloudinary");
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/assets", express_1.default.static("assets"));
app.post("/signup", async (req, res) => {
    try {
        const { success, data } = types_1.CreateUserSchema.safeParse(req.body);
        if (!success) {
            return res.status(400).json(data);
        }
        const user = await db_1.prisma.user.create({
            data: {
                username: data.username,
                password: data.password
            }
        });
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
app.post("/signin", async (req, res) => {
    const result = types_1.SigninSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json(result.error);
    }
    const { username, password } = result.data;
    const response = await db_1.prisma.user.findUnique({
        where: {
            username
        }
    });
    if (!response) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    const token = jsonwebtoken_1.default.sign({
        userId: response.id
    }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });
    return res.status(200).json({
        token
    });
});
app.post("/avatar", middleware_1.authMiddleware, async (req, res) => {
    try {
        const { success, data } = types_1.CreateAvatarSchema.safeParse(req.body);
        if (!success) {
            return res.status(400).json({
                message: "Invalid request body"
            });
        }
        const fileName = `${(0, uuidv4_1.uuid)()}.png`;
        const filePath = `assets/${fileName}`;
        console.log("1. Creating image");
        await (0, image_1.createImage)(data.prompt, filePath);
        console.log("2. Image created:", filePath);
        const uploadResult = await cloudinary_1.cloudinary.uploader.upload(filePath, {
            folder: "avatars"
        });
        console.log("3. Uploaded to Cloudinary");
        // Delete temporary local image
        if (fs_1.default.existsSync(filePath)) {
            fs_1.default.unlinkSync(filePath);
        }
        const avatar = await db_1.prisma.avatar.create({
            data: {
                userId: req.userId,
                name: data.name
            }
        });
        console.log("4. Avatar created");
        await db_1.prisma.avatarImage.create({
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
    }
    catch (error) {
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
        const avatar = await db_1.prisma.avatar.findUnique({
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
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
app.get("/avatars", middleware_1.authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;
        const avatars = await db_1.prisma.avatar.findMany({
            where: {
                userId
            },
            include: {
                avatarImages: true
            }
        });
        return res.json(avatars);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});
app.delete("/avatar/:avatarId", middleware_1.authMiddleware, async (req, res) => {
    try {
        const avatarId = req.params.avatarId;
        const userId = req.userId;
        const avatar = await db_1.prisma.avatar.findFirst({
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
        await db_1.prisma.avatar.delete({
            where: {
                id: avatarId
            }
        });
        return res.json({
            message: "Avatar deleted successfully"
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Failed to delete avatar"
        });
    }
});
app.delete("/avatars", middleware_1.authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;
        await db_1.prisma.avatar.deleteMany({
            where: {
                userId
            }
        });
        return res.status(200).json({
            message: "All avatars deleted successfully"
        });
    }
    catch (error) {
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
