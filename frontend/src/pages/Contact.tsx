import { Footer } from "@/components/Footer";

export function Contact() {
  const stats = [
    { label: "Average reply time", value: "2 hrs" },
    { label: "Support coverage", value: "24/7" },
    { label: "Office locations", value: "4" },
    { label: "Demo calls booked", value: "860" },
  ];

  const items = [
    {
      title: "Support",
      description:
        "harshgautam333@gmail.com for account questions and help with your account.",
    },
    {
      title: "Sales",
      description:
        "sales@higgsfield.ai for pricing, plans, and team onboarding.",
    },
    {
      title: "Partnerships",
      description:
        "partners@higgsfield.ai for collaborations and integrations.",
    },
    {
      title: "Call us",
      description: "+91 9536680694 for product demos and walkthroughs.",
    },
    {
      title: "Hours",
      description: "Monday to Friday, 9:00 AM to 6:00 PM IST.",
    },
    {
      title: "Address",
      description: "Sector 76, Noida, Uttar Pradesh 201301.",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Contact
            </p>

            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Get in touch with us.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Reach out for support, sales, partnerships, or general questions.
              The contact details below are placeholder examples for this demo.
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
           
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}