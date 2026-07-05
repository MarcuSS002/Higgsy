import { StaticPage } from "@/components/StaticPage";

export function Contact() {
    return (
        <StaticPage
            kicker="Contact"
            title="Talk to the team behind the fictional studio."
            subtitle="Use any of the placeholder contact paths below to imagine how support, sales, and partnerships might be organized in the real product."
            stats={[
                { label: "Average reply time", value: "2 hrs" },
                { label: "Support coverage", value: "24/7" },
                { label: "Office locations", value: "4" },
                { label: "Demo calls booked", value: "860" },
            ]}
            items={[
                {
                    title: "Support",
                    description:
                        "support@higgsfield.ai for account questions, bug reports, and help with fake onboarding data.",
                },
                {
                    title: "Sales",
                    description:
                        "sales@higgsfield.ai for pricing, custom plans, and rollout planning for larger teams.",
                },
                {
                    title: "Partnerships",
                    description:
                        "partners@higgsfield.ai for integrations, creator collabs, and distribution ideas.",
                },
                {
                    title: "Call us",
                    description:
                        "+1 (555) 014-2488 is the sample number for live demos and workflow walkthroughs.",
                },
                {
                    title: "Hours",
                    description:
                        "Monday to Friday, 9:00 AM to 6:00 PM UTC, with a fictional weekend response queue for urgent requests.",
                },
                {
                    title: "Mailing address",
                    description:
                        "88 Motion Lane, Suite 1200, San Francisco, CA 94107. This address is placeholder data only.",
                },
            ]}
            note="The contact information above is intentionally fake. Replace it with your real support channels, forms, or booking links later."
        />
    );
}
