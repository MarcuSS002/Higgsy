import { Bot } from "lucide-react";

type Props = {
    title: string;
    description: string;
    image?: string;
};

export function FeatureCard({title,description,image}: Props) {
    return (
        <div className="relative flex-1 rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            {image ? (
                <img src={image} alt={title} className="h-16 w-16 object-contain" />
            ) : (
                <Bot className="h-9 w-9 text-cyan-400" />
            )}

            <h2 className="mt-6 text-xl font-semibold text-white">
                {title}
            </h2>

            <p className=" text-gray-400  text-sm">
                {description}
            </p>

        </div>
    );
}