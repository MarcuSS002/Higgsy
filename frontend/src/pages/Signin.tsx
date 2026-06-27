import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = async () => {
        try {
            const response = await axios.post("http://localhost:3000/signin", {
                username,
                password,
            });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.id);
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex bg-black">
            <div className="flex-1" />
            <div className="flex-1 min-h-screen bg-white flex items-center justify-center">
                <Card className="p-6 space-y-4 w-full max-w-sm">
                    <Input
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleSignin} variant={"outline"}>
                        Sign In
                    </Button>
                </Card>
            </div>
        </div>
    );
};