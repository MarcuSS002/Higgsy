import express, { json } from "express";
import {CreateUserSchema, CreateAvatarSchema, SigninSchema} from "./types";
import { v4 as uuid } from "uuid";
import { GoogleGenAI } from "@google/genai";
import {prisma} from "./db";
import { createImage } from "./image";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});



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

// app.post("/avatar", async (req,res) => {
//     const {success,data} = CreateAvatarSchema.safeParse(req.body);
//     if(!success) {
//         return res.status(400).json({
//             message: "Invalid avatar data"
//         });
//     }
    
//     const leftProfileId = uuid();
//     const rightProfileId = uuid();
//     const frontProfileId = uuid();

//     await Promise.all([
//     createImage(
//         "A realistic left side portrait of a young man, studio lighting",
//         `./assets/${leftProfileId}.png`
//     ),

//     createImage(
//         "A realistic right side portrait of a young man, studio lighting",
//         `./assets/${rightProfileId}.png`
//     ),

//     createImage(
//         "A realistic front portrait of a young man, studio lighting",
//         `./assets/${frontProfileId}.png`
//     )
// ]);



//     // put in s3 and then put in db
//     await prisma.avatar.create({
//     data: {
//       userId: data.userId,
//       name: data.name
//     }
//   })
  
//   res.json({});
// });

app.post("/avatar", async (req, res) => {
    const { success, data } = CreateAvatarSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json(data);
    }

    const { prompt } = data;

    await createImage(data.prompt, "./assets/avatar.png");

    return res.json({
        message: "Image generated successfully"
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