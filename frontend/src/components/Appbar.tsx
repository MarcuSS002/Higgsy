import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export function Appbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isSignupPage = location.pathname === "/signup";

    const userId = localStorage.getItem("userId");

    const isLoggedIn = !userId;

    const handleLogout = () => {
        localStorage.removeItem("userId");
         localStorage.removeItem("token");
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
                            navigate(
                                isSignupPage ? "/signin" : "/signup"
                            );
                        }}
                    >
                        {isSignupPage ? "Sign In" : "Sign Up"}
                    </Button>
                )}

            </div>
        </div>
    );
}