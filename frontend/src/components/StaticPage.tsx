import { Footer } from "./Footer";

export type StaticPageStat = {
    label: string;
    value: string;
};

export type StaticPageItem = {
    title: string;
    description: string;
};

type StaticPageProps = {
    kicker: string;
    title: string;
    subtitle: string;
    stats: StaticPageStat[];
    items: StaticPageItem[];
    note: string;
};

export function StaticPage({
    kicker,
    title,
    subtitle,
    stats,
    items,
    note,
}: StaticPageProps) {
    return (
        <div className="min-h-screen bg-black text-white">
            <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12 md:px-10 lg:px-12">
                <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-950/20 md:p-12">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.14),_transparent_32%)]" />
                    <div className="relative max-w-3xl">
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">
                            {kicker}
                        </p>
                        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                            {title}
                        </h1>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
                            {subtitle}
                        </p>
                    </div>

                    <div className="relative mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur"
                            >
                                <div className="text-2xl font-semibold text-white">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-sm text-neutral-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-3xl border border-white/10 bg-neutral-950/80 p-6 shadow-lg shadow-black/20"
                        >
                            <h2 className="text-xl font-semibold text-white">
                                {item.title}
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-neutral-300">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </section>

                <section className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-6 text-sm leading-6 text-cyan-50 md:p-8">
                    {note}
                </section>
            </main>
            <Footer />
        </div>
    );
}
