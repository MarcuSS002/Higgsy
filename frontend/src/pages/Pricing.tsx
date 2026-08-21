import { Footer } from "@/components/Footer";

export function Pricing() {
  const stats = [
    { label: "Starting price", value: "₹499" },
    { label: "Most popular", value: "Pro" },
    { label: "Presets included", value: "120+" },
    { label: "Free trial", value: "14 days" },
  ];

  const plans = [
    {
      title: "Starter — ₹499/month",
      description:
        "For solo creators who need basic AI video generation and essential editing tools.",
    },
    {
      title: "Pro — ₹1,499/month",
      description:
        "Higher render limits, brand kits, and collaboration features for growing teams.",
    },
    {
      title: "Studio — ₹3,999/month",
      description:
        "Multi-user workspaces, advanced permissions, and priority support for larger teams.",
    },
    {
      title: "Enterprise — Custom pricing",
      description:
        "Custom integrations, security reviews, and dedicated onboarding for organizations.",
    },
    {
      title: "Extra storage",
      description:
        "Add more cloud storage whenever your projects grow beyond the included limit.",
    },
    {
      title: "Avatar & motion packs",
      description:
        "Unlock additional avatar styles and premium motion templates as optional upgrades.",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Pricing
            </p>

            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Simple plans for every creator.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Choose a plan based on your workflow. Every plan includes the core
              AI video tools, with higher limits and more collaboration features
              as you upgrade.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <p className="text-3xl font-semibold">{stat.value}</p>
                <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 grid gap-6 md:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-zinc-700"
              >
                <h3 className="text-xl font-medium">{plan.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">
                  {plan.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}