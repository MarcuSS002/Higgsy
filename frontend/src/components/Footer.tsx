import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="border-t border-neutral-800 bg-black">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

                <div>
                    <h2 className="text-xl font-bold text-white">
                        Propell AI
                    </h2>

                    <p className="mt-1 text-sm text-neutral-400">
                        Create AI avatars and videos in seconds.
                    </p>
                </div>
                <div className="flex gap-8 text-sm text-neutral-400">
                    <Link to="/about" className="transition-colors hover:text-white">
                        About
                    </Link>

                    <Link to="/pricing" className="transition-colors hover:text-white">
                        Pricing
                    </Link>

                    <Link to="/contact" className="transition-colors hover:text-white">
                        Contact
                    </Link>

                    <Link to="/privacy" className="transition-colors hover:text-white">
                        Privacy
                    </Link>
                </div>

            </div>
        </footer>
    );
}