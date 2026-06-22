import z from "zod";
import dotenv from "dotenv";
dotenv.config();

export const CreateUserSchema = z.object({
    username: z.string(),
    password: z.string()
})

export const SigninSchema = z.object({
    username: z.string(),
    password: z.string().min(6),
});

export const CreateAvatarSchema = z.object({
    userId: z.string(),
    name: z.string(),
    prompt: z.string()
});