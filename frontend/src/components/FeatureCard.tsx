import { Bot } from "lucide-react";

type Props = {
    title: string;
    description: string;
    image?: string;
};

export function FeatureCard({ title, description, image }: Props) {
    return (
        <div className="flex flex-col h-full rounded-3xl p-8 bg-slate-900">
            {image ? (
                <img src={image} alt={title} className="h-10 w-10 object-contain" />
            ) : (
                <Bot className="h-15 w-9 text-cyan-400" />
            )}

            <div className="mt-auto pt-6">
                <h2 className="text-lg font-semibold text-white">
                    {title}
                </h2>
                <p className="mt-1 text-gray-400 text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
}