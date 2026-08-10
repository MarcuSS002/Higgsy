import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import v3 from "../assets/v3.mp4";

export function PromoCard() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="relative rounded-3xl overflow-hidden text-left h-full">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={v3}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient overlay on top of video */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/80 via-slate-900/80 to-slate-800/80" />

      {/* Content sits above video + overlay */}
      <div className="relative z-10 p-8">
        <span className="rounded-full bg-pink-500 px-3 py-1 text-sm font-semibold text-white">
          EXTRA DISCOUNT
        </span>

        <div
          onClick={handleSignup}
          className="mt-6 flex flex-col items-start cursor-pointer"
        >
          <h1 className="text-5xl font-bold text-white leading-tight">
            SIGN UP AND GET
            <br />
            YOUR
            <span className="text-cyan-400"> EXTRA DISCOUNT</span>
          </h1>

          <p className="mt-5 text-lg text-gray-300">
            Create an account and unlock features of our platform.
          </p>

          <Button
            variant="secondary"
            className="mt-10 rounded-2xl px-8 py-7 text-lg"
          >
            Sign up and get your image on demand
          </Button>
        </div>
      </div>
    </div>
  );
}