import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import signup from "../assets/signup.jpg";

const imageUrl = signup;

export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/signup",
                {
                    username,
                    password,
                }
            );
            navigate("/signin");
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        
        <div className="fixed inset-0 flex overflow-hidden">
            {/* Left Side */}
            <div className="flex-1 h-dvh overflow-hidden">
                <img
                    src={imageUrl}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Side */}
            <div className="flex-1 h-dvh bg-white flex items-center justify-center overflow-hidden">
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
                    <Button onClick={handleSignup} variant="outline">
                        Sign Up
                    </Button>
                </Card>
            </div>
        </div>
    );
}