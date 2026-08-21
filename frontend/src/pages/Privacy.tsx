import { StaticPage } from "@/components/StaticPage";

export function Privacy() {
    return (
        <StaticPage
            kicker="Privacy"
            title="Clear rules for how placeholder data is handled."
            subtitle="This sample policy explains how a fictional version of the app could describe collection, usage, and retention in a way that stays simple for users."
            stats={[
                { label: "Retention window", value: "30 days" },
                { label: "Review cadence", value: "Quarterly" },
                { label: "Regions supported", value: "6" },
                { label: "Security checks", value: "12" },
            ]}
            items={[
                {
                    title: "What we collect",
                    description:
                        "Account details, prompt history, and usage metrics that help the product show fake but believable activity.",
                },
                {
                    title: "Why we use it",
                    description:
                        "To personalize dashboards, improve workflows, and keep the sample experience consistent across pages.",
                },
                {
                    title: "Data storage",
                    description:
                        "We imagine encrypted storage, short-lived logs, and minimal sharing outside the service boundary.",
                },
                {
                    title: "Cookies",
                    description:
                        "Only essential session cookies and preference flags are shown in this placeholder privacy story.",
                },
                {
                    title: "Your controls",
                    description:
                        "Export, delete, and correction tools would appear here in the real product once the backend is in place.",
                },
                {
                    title: "Policy updates",
                    description:
                        "We would update the policy when features change and surface the latest version inside the app footer.",
                },
            ]}
        />
    );
}
