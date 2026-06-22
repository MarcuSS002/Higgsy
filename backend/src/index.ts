import express, { json } from "express";
import {CreateUserSchema, CreateAvatarSchema, SigninSchema} from "./types";
import {prisma} from "./db";
import {uuid} from "uuidv4";
import { createImage } from "./image";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.json());
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


app.post("/signin", async (req,res) => {
    const result = SigninSchema.safeParse(req.body);
    if(!result.success) {
        return res.status(400).json(result.error);
    }

    const { username, password } = result.data;
    const response = await prisma.user.findUnique({
        where: {
            username
        }
    });

    if (!response) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json({
        id: response.id,
        username: response.username
    });
});


app.post("/avatar", async (req, res) => {
    const {success, data} = CreateAvatarSchema.safeParse(req.body);

    if(!success) {
        return res.status(400).json({
            message: "Invalid request body",
        });
    }

    //1.Generate Image
    const fileName = `${uuid()}.png`;

    await createImage(data.prompt, `assets/${fileName}`);


    //2. Create Avatar
    const avatar = await prisma.avatar.create({
        data: {
            userId: data.userId,
            name: data.name
        }
    });

    //3. Save image path
    await prisma.avatarImage.create({
        data: {
            avatarId: avatar.id,
            type: "Model",
            url: `/assets/${fileName}`
        }
    });
       return res.json({
        success: true,
        avatarId: avatar.id,
        image: `/assets/${fileName}`
    });
});

   



app.post("/avatar/:avatarId", async (req,res) => {
    const avatars = await prisma.avatar.findMany({
        where: {
            userId: "1"
        }
    })
    console.log(avatars);
    res.json(avatars);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});