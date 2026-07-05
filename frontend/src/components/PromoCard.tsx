import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function PromoCard() {
    const navigate = useNavigate();
    const handleSignup = async () => {
        navigate("/signup");
    };

    return (
        <div className=" rounded-3xl m-4 overflow-hidden bg-gradient-to-r from-cyan-700 via-slate-900 to-slate-800 p-8 y-1">

            <span className="rounded-full bg-pink-500 px-3 py-1 text-sm font-semibold">
                EXTRA DISCOUNT
            </span>
            
            <div onClick={handleSignup} >
            <h1 className="mt-6 text-5xl font-bold text-white">
                SIGN UP AND GET
                <br />
                YOUR
                <span className="text-cyan-400">
                    {" "}EXTRA DISCOUNT
                </span>
            </h1>

            <p className="mt-5 text-lg text-gray-300">
                Create an account and unlock features of our platform.
            </p>

            <Button
                className="mt-10 rounded-2xl px-8 py-7 text-lg m-4 cursor-pointer"
                variant="secondary"
            >
                Sign up and get your image on demand
            </Button>
            </div>
        </div>
    );
}