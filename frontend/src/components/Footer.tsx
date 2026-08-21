import { Link } from "react-router-dom";
import gm from "../assets/8.png";

const InstagramIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon
      points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const XIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy", to: "/privacy" },
  { label: "Blog", to: "/blog" },
];

const SOCIAL_LINKS = [
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { Icon: YoutubeIcon, href: "#", label: "YouTube" },
  { Icon: XIcon, href: "#", label: "X (Twitter)" },
];

const LEGAL_LINKS = [
  { label: "Terms", to: "/terms" },
  { label: "Privacy", to: "/privacy" },
  { label: "Cookies", to: "/cookies" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#080808] text-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div
        aria-hidden="true"
        className="h-px w-full opacity-35"
        style={{
          background:
            "linear-gradient(to right, transparent, #C9A84C 30%, #C9A84C 70%, transparent)",
        }}
      />

      <div
        aria-hidden="true"
        className="relative select-none overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.018) 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.018) 55%, transparent 100%)",
          lineHeight: 1,
        }}
      >
        <p
          className="whitespace-nowrap pl-[0.03em] pt-[0.04em] font-bold leading-none"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(72px, 14vw, 160px)",
            WebkitTextStroke: "1px rgba(255,255,255,0.12)",
            color: "transparent",
          }}
        >
          Propell AI
        </p>
      </div>

      <div
        className="relative z-10 mx-auto max-w-6xl px-8 sm:px-12 pb-14"
        style={{ marginTop: "-24px" }}
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.6fr_1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <div
              className="h-px w-9 opacity-80"
              style={{ background: "#C9A84C" }}
            />
            <img src={gm} alt="Propell AI Logo" className="h-[52px] w-12" />

            <p
              className="max-w-[190px] text-[11.5px] leading-relaxed tracking-wide"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              Intelligence that moves at the speed of ambition.
            </p>

            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "rgba(255,255,255,0.32)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#C9A84C";
                    el.style.borderColor = "rgba(201,168,76,0.45)";
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow =
                      "0 6px 18px rgba(201,168,76,0.13)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "rgba(255,255,255,0.32)";
                    el.style.borderColor = "rgba(255,255,255,0.09)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col pt-1">
            <span
              className="mb-[18px] block text-[9.5px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: "#C9A84C" }}
            >
              Navigation
            </span>

            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group flex items-center gap-2.5 text-[13px] transition-all duration-200"
                    style={{ color: "rgba(255,255,255,0.36)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "rgba(255,255,255,0.88)";
                      el.style.paddingLeft = "4px";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "rgba(255,255,255,0.36)";
                      el.style.paddingLeft = "0px";
                    }}
                  >
                    <span
                      className="inline-block h-px w-2.5 flex-shrink-0"
                      style={{ background: "#C9A84C", opacity: 0.5 }}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-1">
            <div
              className="relative overflow-hidden rounded-[10px] p-[22px_20px]"
              style={{
                border: "1px solid rgba(201,168,76,0.18)",
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 60%)",
              }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)",
                }}
              />

              <p
                className="mb-2.5 text-[9.5px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#C9A84C" }}
              >
                Get started
              </p>

              <p
                className="mb-2 text-[17px] leading-snug"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  color: "#fff",
                }}
              >
                Move at the speed of ambition.
              </p>

              <p
                className="mb-[18px] text-[11.5px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.32)" }}
              >
                Join thousands of teams using Propell AI to turn strategy into
                motion.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-[12px] font-medium transition-all duration-200"
                style={{ background: "#C9A84C", color: "#080808" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#daba60";
                  el.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#C9A84C";
                  el.style.transform = "translateY(0)";
                }}
              >
                <Link to="/signup">Start free</Link>
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-8 sm:px-12">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.05) 80%, transparent)",
          }}
        />
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-8 py-[18px] sm:px-12">
        <p
          className="text-[10.5px] uppercase tracking-[0.12em]"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          © {new Date().getFullYear()} Propell AI — All rights reserved
        </p>

        <div className="flex items-center gap-5">
          {LEGAL_LINKS.map(({ label, to }, i) => (
            <span key={to} className="flex items-center gap-5">
              <Link
                to={to}
                className="text-[10.5px] tracking-[0.05em] transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.2)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.55)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.2)";
                }}
              >
                {label}
              </Link>

              {i < LEGAL_LINKS.length - 1 && (
                <span
                  style={{
                    color: "rgba(255,255,255,0.12)",
                    fontSize: "10.5px",
                  }}
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}