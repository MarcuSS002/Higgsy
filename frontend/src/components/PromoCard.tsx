import { Button } from "@/components/ui/button";

export function PromoCard() {
    return (
        <div className=" rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-700 via-slate-900 to-slate-800 p-8  hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1">

            <span className="rounded-full bg-pink-500 px-3 py-1 text-sm font-semibold">
                EXTRA DISCOUNT
            </span>

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
                className="mt-10 rounded-2xl px-8 py-7 text-lg m-4"
                variant="secondary"
            >
                Sign up and get your image on demand
            </Button>

        </div>
    );
}