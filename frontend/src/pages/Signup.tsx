import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import signup from "../assets/signup.jpg";
import { API_URL } from "../lib/api";

const imageUrl = signup;

export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await axios.post(
                `${API_URL}/signup`,
                {
                    username,
                    password,
                }
            );

            console.log(response.data);
            navigate("/signin");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="h-dvh flex flex-col overflow-hidden">


            <div className="flex flex-1 overflow-hidden">

                {/* Left Side */}
                <div className="relative flex-1 overflow-hidden">
                    <img
                        src={imageUrl}
                        alt="Background"
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
                <div className="flex flex-1 items-center justify-center bg-black px-16">

                    <div className="w-full max-w-xl">

                        {/* Heading */}
                        <div className="mb-10">
                            <h2 className="text-[56px] font-semibold text-white leading-none">
                                Sign Up
                            </h2>

                            <p className="mt-2 text-[18px] text-[#A1A1AA]">
                                Already have an account?{" "}
                                <span
                                    onClick={() => navigate("/signin")}
                                    className="text-[#FF5A1F] cursor-pointer"
                                >
                                    Sign in
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
                        <div className="mb-8">
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
                            onClick={handleSignup}
                            className="w-full h-14 bg-[#FF5A1F] hover:bg-[#E94E16] text-white text-[16px] font-medium rounded-lg"
                        >
                            Create Account
                        </Button>

                    </div>

                </div>

            </div>
        </div>
    );
}