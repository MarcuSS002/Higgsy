import { StaticPage } from "@/components/StaticPage";

export function Pricing() {
    return (
        <StaticPage
            kicker="Pricing"
            title="Simple plans that scale with your studio."
            subtitle="Pick a fake plan that matches your output volume. Every tier includes the same core creative system, with higher limits and collaboration tools as you go up."
            stats={[
                { label: "Starting price", value: "$19" },
                { label: "Most popular tier", value: "Pro" },
                { label: "Included presets", value: "120+" },
                { label: "Free trial", value: "14 days" },
            ]}
            items={[
                {
                    title: "Starter — $19 / mo",
                    description:
                        "For solo creators who want access to basic generation, a small asset library, and lightweight exports.",
                },
                {
                    title: "Pro — $49 / mo",
                    description:
                        "For growing teams that need higher render limits, brand kits, and a shared review queue.",
                },
                {
                    title: "Studio — $129 / mo",
                    description:
                        "For multi-seat creative teams with advanced permissions, campaign workspaces, and priority support.",
                },
                {
                    title: "Enterprise — custom",
                    description:
                        "For organizations that need security reviews, custom integrations, and a dedicated customer success lead.",
                },
                {
                    title: "Add-ons",
                    description:
                        "Extra avatar packs, premium motion styles, and expanded storage are available as fictional upgrades.",
                },
                {
                    title: "Billing promise",
                    description:
                        "All plans are shown as clean placeholder pricing so you can wire checkout later without changing layout.",
                },
            ]}
            note="The pricing table is fake data only. Swap in your real plan names, billing cycle, and checkout flow when you are ready."
        />
    );
}
