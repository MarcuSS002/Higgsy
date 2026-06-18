import express, { json } from "express";
import {CreateUserSchema} from "./types";
import z from "zod";
import {prisma} from "./db";

const app = express();

app.use(express.json());

app.post("/signup", async (req,res) => {
    const {success,data} = CreateUserSchema.safeParse(req.body);
    if(!success) {
        return res.status(400).json({
            message: "Invalid email or password"
        });
        return ;
    }
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: req.body.password
        }
    });
    res.json({
        id: user.id,
    });
});


app.post("/signin", async (req,res) => {
    const result = AuthModel.shape.SigninSchema.safeParse(req.body);
    if(!result.success) {
        return res.status(400).json(result.error);
    }

    const { email, password } = result.data;
    const response = await AuthService.signin(email, password);
    res.json(response);
});

// app.get("/", (req, res) => {
//     res.send("Server is running...");
// });

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});