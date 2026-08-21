import { Footer } from "@/components/Footer";

export function Privacy() {
  const stats = [
    { label: "Retention window", value: "30 days" },
    { label: "Review cadence", value: "Quarterly" },
    { label: "Regions supported", value: "6" },
    { label: "Security checks", value: "12" },
  ];

  const items = [
    {
      title: "What we collect",
      description:
        "Basic account details, usage activity, and preferences to improve the experience.",
    },
    {
      title: "Why we use it",
      description:
        "To personalize features, improve performance, and keep the app working smoothly.",
    },
    {
      title: "Data storage",
      description:
        "User information is stored securely with limited access and regular security checks.",
    },
    {
      title: "Cookies",
      description:
        "Essential cookies help keep you signed in and remember your preferences.",
    },
    {
      title: "Your controls",
      description:
        "You can request to update or remove your data when those features become available.",
    },
    {
      title: "Policy updates",
      description:
        "We'll update this policy whenever important changes are made to the service.",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Privacy
            </p>

            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Your data, explained simply.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              This page outlines how information is collected, used, stored, and
              protected in this demo version of the product.
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
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-zinc-700"
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <p className="text-sm leading-7 text-zinc-400">
              This privacy policy is placeholder content for demonstration
              purposes and should be replaced with your actual policy before
              launch.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}