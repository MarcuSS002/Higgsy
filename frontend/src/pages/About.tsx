import { StaticPage } from "@/components/StaticPage";

export function About() {
    return (
        <StaticPage
            kicker="About Higgsfield"
            title="Built to turn ideas into polished AI video output."
            subtitle="Higgsfield is a fictional studio for teams who want to move from prompt to production fast. The product combines avatars, motion, and editing workflows into one place."
            stats={[
                { label: "Creative teams onboarded", value: "18k+" },
                { label: "Assets shipped this month", value: "2.4M" },
                { label: "Average launch time", value: "7 mins" },
                { label: "Global uptime", value: "99.98%" },
            ]}
            items={[
                {
                    title: "Our mission",
                    description:
                        "Give creators a fast lane for generating consistent, high-quality AI media without juggling five different tools.",
                },
                {
                    title: "How we work",
                    description:
                        "We use a studio-style workflow: clear briefs, reusable templates, and production presets that keep output predictable.",
                },
                {
                    title: "What teams get",
                    description:
                        "Shared libraries, review-ready previews, and simple collaboration so design, marketing, and ops stay aligned.",
                },
                {
                    title: "Why it feels different",
                    description:
                        "The interface is intentionally minimal, with fake data surfaces that make the product feel live and immediate.",
                },
                {
                    title: "Creative scope",
                    description:
                        "From product explainers to short-form social edits, the app is framed as a single place to experiment and publish.",
                },
                {
                    title: "Team culture",
                    description:
                        "Small iteration loops, visible metrics, and strong defaults keep the studio moving without slowing creators down.",
                },
            ]}
            note="This is a demo About page with placeholder company data, designed to feel complete while you build the real content later."
        />
    );
}
