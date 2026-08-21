import { Footer } from "@/components/Footer";

export function About() {
  const stats = [
    { label: "Creators using the platform", value: "18k+" },
    { label: "Videos created", value: "2.4M" },
    { label: "Average creation time", value: "7 min" },
    { label: "Uptime", value: "99.98%" },
  ];

  const items = [
    {
      title: "What we're building",
      description: "A faster way to turn ideas into finished videos with fewer steps.",
    },
    {
      title: "Everything in one place",
      description: "Avatars, motion, and editing work together inside the same workspace.",
    },
    {
      title: "Made for teams",
      description: "Shared assets and quick previews make it easier to work together.",
    },
    {
      title: "Clean experience",
      description: "The interface stays simple so the focus remains on creating.",
    },
    {
      title: "Built for everyday content",
      description: "Create product videos, social posts, and short edits without a complicated setup.",
    },
    {
      title: "Still growing",
      description: "This demo represents the direction of the product while the real features are being built.",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              About Higgsfield
            </p>

            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              A simple place to create AI videos.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Higgsfield is a fictional AI video platform where creators can
              generate avatars, animate scenes, and edit videos without switching
              between multiple tools.
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
        </div>
      </main>

      <Footer />
    </>
  );
}