import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-graphite text-white">
      <div
        className="mx-auto"
        style={{
          maxWidth: "var(--max-w-content)",
          padding: "clamp(2rem, 4vw, 4rem) clamp(1rem, 3vw, 2rem)",
        }}
      >
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-[family-name:var(--font-display)] text-xl font-bold">
              Leads<span className="text-orange">maskinen</span>
            </span>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Din automatiserade B2B-leadmotor. Färdigbyggd.
            </p>
          </div>

          {/* Tjänster */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Tjänster
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="/tjanster/portal" className="hover:text-white transition-colors">
                  Nischportal (Premium)
                </a>
              </li>
              <li>
                <a href="/tjanster/landningssida" className="hover:text-white transition-colors">
                  Landningssida (Standard)
                </a>
              </li>
              <li>
                <a href="/tjanster/icp-outreach" className="hover:text-white transition-colors">
                  ICP & Outreach
                </a>
              </li>
              <li>
                <a href="/tjanster/automation" className="hover:text-white transition-colors">
                  Marketing Automation
                </a>
              </li>
              <li>
                <a href="/tjanster/workshop" className="hover:text-white transition-colors">
                  ICP Workshop
                </a>
              </li>
            </ul>
          </div>

          {/* Resurser */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Resurser
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="/guide/" className="hover:text-white transition-colors">
                  Konverteringsguide
                </a>
              </li>
              <li>
                <a
                  href="/konverteringsanalys/"
                  className="hover:text-white transition-colors"
                >
                  Konverteringsanalys
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>{SITE.founder}</li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {SITE.name}. Alla rättigheter
            förbehållna.
          </p>
          <a
            href="/integritetspolicy/"
            className="text-xs text-white/40 hover:text-white transition-colors"
          >
            Integritetspolicy
          </a>
        </div>
      </div>
    </footer>
  );
}
