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
            const response = await axios.post(`${API_URL}/signin`, {
                username,
                password,
            });
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="h-dvh flex overflow-hidden">

            {/* Left Side — video */}
            <div className="relative flex-1 overflow-hidden">
                <video
                    src={v1}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                <div className="absolute left-8 top-8">
                    <span className="inline-block rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-sm">
                        4K Resolution
                    </span>
                    <h1 className="mt-4 text-5xl font-extrabold text-white leading-tight">
                        PROPELLO 2.0 4K
                    </h1>
                    <p className="mt-2 text-lg text-gray-300">
                        The world's most capable image model at full 4K
                    </p>
                </div>
            </div>

            {/* Right Side */}
            {/* Right Side */}
<div className="relative flex-1 bg-black flex items-center justify-center px-16">

    <div className="w-full max-w-xl">

        {/* Heading */}
        <div className="mb-10">
            <h2 className="text-[56px] font-semibold text-white leading-none">
                Sign In
            </h2>

            <p className="mt-2 text-[18px] text-[#A1A1AA]">
                New user?{" "}
                <span
                    onClick={() => navigate("/signup")}
                    className="text-[#FF5A1F] cursor-pointer"
                >
                    Create an account
                </span>
            </p>
        </div>

        {/* Username */}
        <div className="mb-6">
            <label className="block mb-3 text-[16px] text-white">
                Username
            </label>

            <Input
                placeholder="Enter your username here"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-14 bg-transparent border border-[#27272A] text-white placeholder:text-[#71717A] rounded-lg"
            />
        </div>

        {/* Password */}
        <div className="mb-6">
            <label className="block mb-3 text-[16px] text-white">
                Password
            </label>

            <Input
                type="password"
                placeholder="Enter your password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-14 bg-transparent border border-[#27272A] text-white placeholder:text-[#71717A] rounded-lg"
            />
        </div>

        {/* Button */}
        <Button
            onClick={handleSignin}
            className="w-full h-14 bg-[#FF5A1F] hover:bg-[#E94E16] text-white text-[16px] font-medium rounded-lg"
        >
            Sign In
        </Button>
    </div>
</div>     
            </div>
    );
};