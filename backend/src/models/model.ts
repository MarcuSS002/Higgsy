import z from "zod";

export const AuthModel = z.object({
    SignupSchema : z.object({
        name : z.string(),
        email : z.string().email(),
        password : z.string().min(6),
    }), 

    SigninSchema : z.object({
        email : z.string().email(),
        password : z.string().min(6),
    })
})