import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export function Appbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isSignupPage = location.pathname === "/signup";

    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, [location.pathname]);

    const isLoggedIn = !!token;

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken(null);
        navigate("/");
    };

    return (
        <div className="bg-black text-white flex justify-between">
            <div
                onClick={() => navigate("/")}
                className="p-4 text-xl cursor-pointer"
            >
                Higgsfield
            </div>

            <div className="flex items-center p-2">
                {isLoggedIn ? (
                    <Button onClick={handleLogout}>
                        Logout
                    </Button>
                ) : (
                    <Button
                        className="bg-white text-black hover:bg-gray-200"
                        variant="outline"
                        onClick={() => {
                            navigate(isSignupPage ? "/signin" : "/signup");
                        }}
                    >
                        {isSignupPage ? "Sign In" : "Sign Up"}
                    </Button>
                )}

                <Button onClick={() => navigate("/signin")} className="ml-4 bg-[#022954] text-white hover:bg-[#022954]/80">
                    Log In
                </Button>
            </div>
        </div>
    );
}