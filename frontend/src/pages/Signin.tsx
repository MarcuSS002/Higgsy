import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import v1 from "../assets/v1.mp4";
import { API_URL } from "../lib/api";

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignin = async () => {
        try {
            const response = await axios.post(
                `${API_URL}/signin`,
                {
                    username,
                    password,
                }
            );

            localStorage.setItem("token", response.data.token);

            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="h-dvh flex flex-col overflow-hidden">


            <div className="flex flex-1 overflow-hidden">

                {/* Left Side */}
                <div className="relative flex-1 overflow-hidden">
                    <video
                        src={v1}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute left-8 top-8">
                        <span className="inline-block rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                            4K Resolution
                        </span>

                        <h1 className="mt-4 text-5xl font-extrabold text-white">
                            PROPELLO 2.0 4K
                        </h1>

                        <p className="mt-2 text-lg text-gray-300">
                            The world's most capable image model at full 4K
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-1 items-center justify-center bg-white overflow-hidden">
                    <Card className="w-full max-w-sm space-y-4 p-6">
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

                        <Button
                            onClick={handleSignin}
                            variant="outline"
                        >
                            Sign In
                        </Button>
                    </Card>
                </div>

            </div>
        </div>
    );
};