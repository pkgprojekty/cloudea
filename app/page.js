"use client";

import { useMemo, useState } from "react";
import { Globe, ArrowRight, Database, Landmark, Layers3, ShieldCheck } from "lucide-react";

export default function CompanyWebsite() {
  const [lang, setLang] = useState("pl");

  const content = useMemo(
    () => ({
      pl: {
        brand: "Strategy & Architecture",
        tagline: "Premium advisory • IT Architecture • Trusted Data Foundations",
        nav: {
          services: "Oferta",
          about: "O firmie",
          approach: "Podejście",
          contact: "Kontakt",
        },
        badge: "Fundamenty architektury dla strategii biznesowej",
        heroTitle: "Budujemy architekturę IT, na której biznes może bezpiecznie oprzeć swoją strategię.",
        heroText:
          "Pomagamy organizacjom tworzyć solidne fundamenty architektury IT, porządkować krajobraz systemów i ustanawiać zaufane źródła prawdy, aby decyzje biznesowe były szybsze, trafniejsze i oparte na danych, którym można ufać.",
        ctaPrimary: "Umów rozmowę",
        ctaSecondary: "Poznaj ofertę",
        stat1Title: "Nasza rola",
        stat1Value: "Strategia → Architektura → Dane → Decyzje",
        stat1Text:
          "Łączymy perspektywę biznesową i technologiczną, tak aby strategia mogła być realizowana w sposób uporządkowany, mierzalny i skalowalny.",
        stat2Title: "Specjalizacja",
        stat2Value: "Enterprise & Solution Architecture",
        stat2Text:
          "Projektujemy modele docelowe, zasady integracji, architekturę danych i praktyczne fundamenty governance dla organizacji działających w złożonym środowisku.",
        benefits: [
          "Źródła prawdy, którym biznes może ufać",
          "Architektura wspierająca realizację strategii",
          "Porządkowanie systemów, danych i zależności",
          "Lepsze decyzje dzięki przejrzystym fundamentom IT",
        ],
        servicesLabel: "Oferta",
        servicesTitle: "W czym pomagamy",
        servicesText:
          "Pracujemy z firmami, które chcą budować nowoczesne środowisko IT jako realny fundament wzrostu, transformacji i lepszego zarządzania.",
        services: [
          {
            icon: Landmark,
            title: "Architektura dla realizacji strategii",
            desc: "Przekładamy cele biznesowe na docelowy model architektury, zasady decyzyjne i praktyczny plan zmian.",
          },
          {
            icon: Layers3,
            title: "Fundamenty architektury IT",
            desc: "Porządkujemy aplikacje, integracje, domeny i odpowiedzialności, tworząc spójny fundament dla dalszego rozwoju organizacji.",
          },
          {
            icon: Database,
            title: "Trusted data & sources of truth",
            desc: "Pomagamy definiować i porządkować zaufane źródła prawdy, tak aby raportowanie, analityka i operacje opierały się na wiarygodnych danych.",
          },
          {
            icon: ShieldCheck,
            title: "Governance i model docelowy",
            desc: "Projektujemy zasady, role i mechanizmy nadzoru, które stabilizują architekturę i wspierają kontrolowany rozwój zmian.",
          },
        ],
        aboutLabel: "O firmie",
        aboutTitle: "Premium doradztwo na styku biznesu, architektury i danych.",
        aboutText1:
          "Strategy & Architecture wspiera organizacje w budowaniu takich fundamentów IT, które nie tylko porządkują technologię, ale przede wszystkim umożliwiają biznesowi skuteczną realizację strategii.",
        aboutText2:
          "Nasze podejście opiera się na jednym kluczowym założeniu: strategia biznesowa wymaga architektury oraz danych, którym można ufać. Dlatego pomagamy klientom tworzyć przejrzyste źródła prawdy, lepiej rozumieć zależności i podejmować trafniejsze decyzje inwestycyjne.",
        whyTitle: "Dlaczego klienci z nami pracują",
        whyItems: [
          "Łączymy perspektywę zarządu, biznesu i IT",
          "Tworzymy architekturę, która ma praktyczną wartość decyzyjną",
          "Pomagamy budować zaufane źródła danych i jasność odpowiedzialności",
          "Dostarczamy premium jakość, klarowność i wysoki poziom komunikacji",
        ],
        approachLabel: "Podejście",
        approachTitle: "Jak pracujemy",
        approachSteps: [
          {
            title: "1. Zrozumienie strategii",
            desc: "Zaczynamy od zrozumienia kierunku biznesowego, ambicji wzrostu i najważniejszych decyzji, które organizacja musi podejmować.",
          },
          {
            title: "2. Uporządkowanie architektury",
            desc: "Mapujemy krajobraz systemów, procesów i danych, wskazując luki, niespójności oraz obszary ryzyka dla realizacji strategii.",
          },
          {
            title: "3. Definicja źródeł prawdy",
            desc: "Pomagamy ustalić, skąd powinny pochodzić kluczowe dane, kto za nie odpowiada i jak zapewnić ich spójność oraz wiarygodność.",
          },
          {
            title: "4. Model docelowy i roadmapa",
            desc: "Projektujemy docelowy fundament architektury oraz pragmatyczny plan dojścia, który wspiera biznes bez zbędnej złożoności.",
          },
        ],
        contactLabel: "Kontakt",
        contactTitle: "Porozmawiajmy o architekturze, która naprawdę wspiera biznes.",
        contactText:
          "Jeśli chcesz uporządkować fundamenty IT, zbudować zaufane źródła prawdy i lepiej połączyć strategię z technologią, chętnie porozmawiamy.",
        detailsTitle: "Dane kontaktowe",
        companyLabel: "Firma",
        emailLabel: "E-mail",
        phoneLabel: "Telefon",
        linkedinLabel: "LinkedIn",
        contactButton: "Skontaktuj się",
        footer: "Wszelkie prawa zastrzeżone.",
        policy: "Polityka prywatności • Cookies • RODO",
      },
      en: {
        brand: "Strategy & Architecture",
        tagline: "Premium advisory • IT Architecture • Trusted Data Foundations",
        nav: {
          services: "Services",
          about: "About",
          approach: "Approach",
          contact: "Contact",
        },
        badge: "Architecture foundations for business strategy",
        heroTitle: "We build IT architecture foundations that enable business strategy with data you can trust.",
        heroText:
          "We help organizations create strong IT architecture foundations, simplify complex technology landscapes, and establish trusted sources of truth so that business decisions are faster, clearer, and grounded in reliable data.",
        ctaPrimary: "Book a conversation",
        ctaSecondary: "Explore services",
        stat1Title: "Our role",
        stat1Value: "Strategy → Architecture → Data → Decisions",
        stat1Text:
          "We connect business and technology perspectives so strategy can be executed in a structured, measurable, and scalable way.",
        stat2Title: "Specialization",
        stat2Value: "Enterprise & Solution Architecture",
        stat2Text:
          "We design target models, integration principles, data architecture, and practical governance foundations for organizations operating in complex environments.",
        benefits: [
          "Trusted sources of truth for the business",
          "Architecture that enables strategy execution",
          "Clarity across systems, data, and dependencies",
          "Better decisions through stronger IT foundations",
        ],
        servicesLabel: "Services",
        servicesTitle: "What we do",
        servicesText:
          "We work with companies that want to build modern IT environments as a real foundation for growth, transformation, and stronger management control.",
        services: [
          {
            icon: Landmark,
            title: "Architecture for strategy execution",
            desc: "We translate business goals into target architecture, decision principles, and a practical change agenda.",
          },
          {
            icon: Layers3,
            title: "IT architecture foundations",
            desc: "We bring structure to applications, integrations, domains, and responsibilities to create a coherent foundation for future growth.",
          },
          {
            icon: Database,
            title: "Trusted data & sources of truth",
            desc: "We help define and organize trusted sources of truth so reporting, analytics, and operations are built on reliable data.",
          },
          {
            icon: ShieldCheck,
            title: "Governance & target operating model",
            desc: "We design principles, roles, and governance mechanisms that stabilize architecture and support controlled change.",
          },
        ],
        aboutLabel: "About",
        aboutTitle: "Premium advisory at the intersection of business, architecture, and data.",
        aboutText1:
          "Strategy & Architecture supports organizations in building IT foundations that do more than organize technology — they enable the business to execute strategy with confidence.",
        aboutText2:
          "Our approach is based on one key belief: business strategy requires architecture and data that can be trusted. That is why we help clients create clear sources of truth, understand dependencies, and make better investment decisions.",
        whyTitle: "Why clients work with us",
        whyItems: [
          "We connect board, business, and IT perspectives",
          "We design architecture with real decision-making value",
          "We help build trusted data foundations and clear accountability",
          "We deliver premium quality, clarity, and executive-level communication",
        ],
        approachLabel: "Approach",
        approachTitle: "How we work",
        approachSteps: [
          {
            title: "1. Understand the strategy",
            desc: "We begin by understanding the business direction, growth ambitions, and the most important decisions the organization needs to make.",
          },
          {
            title: "2. Structure the architecture",
            desc: "We map systems, processes, and data landscapes to identify gaps, inconsistencies, and risks to strategy execution.",
          },
          {
            title: "3. Define sources of truth",
            desc: "We help determine where critical data should come from, who owns it, and how consistency and reliability should be ensured.",
          },
          {
            title: "4. Design the target foundation",
            desc: "We shape the target architecture foundation and a pragmatic roadmap that supports the business without unnecessary complexity.",
          },
        ],
        contactLabel: "Contact",
        contactTitle: "Let’s talk about architecture that truly enables business.",
        contactText:
          "If you want to strengthen your IT foundations, establish trusted sources of truth, and connect business strategy with technology more effectively, we would be glad to talk.",
        detailsTitle: "Contact details",
        companyLabel: "Company",
        emailLabel: "Email",
        phoneLabel: "Phone",
        linkedinLabel: "LinkedIn",
        contactButton: "Get in touch",
        footer: "All rights reserved.",
        policy: "Privacy Policy • Cookies • GDPR",
      },
    }),
    []
  );

  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b1020]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-semibold tracking-[0.18em] text-white">{t.brand}</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.35em] text-white/50">
              {t.tagline}
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex gap-8 text-sm text-white/75">
              <a href="#services" className="transition hover:text-white">{t.nav.services}</a>
              <a href="#about" className="transition hover:text-white">{t.nav.about}</a>
              <a href="#approach" className="transition hover:text-white">{t.nav.approach}</a>
              <a href="#contact" className="transition hover:text-white">{t.nav.contact}</a>
            </nav>
            <button
              onClick={() => setLang(lang === "pl" ? "en" : "pl")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <Globe className="h-4 w-4" />
              {lang === "pl" ? "EN" : "PL"}
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 text-sm text-[#f2df9b] shadow-sm">
              {t.badge}
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              {t.heroText}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-[#111111] shadow-lg transition hover:-translate-y-0.5"
              >
                {t.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-md">
              <div className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">{t.stat1Title}</div>
              <div className="mt-3 text-2xl font-semibold text-white">{t.stat1Value}</div>
              <p className="mt-4 text-sm leading-7 text-white/70">{t.stat1Text}</p>
            </div>
            <div className="rounded-[28px] border border-[#d4af37]/25 bg-gradient-to-br from-[#151b31] to-[#0f1426] p-7 shadow-2xl">
              <div className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">{t.stat2Title}</div>
              <div className="mt-3 text-2xl font-semibold text-white">{t.stat2Value}</div>
              <p className="mt-4 text-sm leading-7 text-white/70">{t.stat2Text}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {t.benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.3em] text-[#d4af37]">{t.servicesLabel}</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">{t.servicesTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-white/70">{t.servicesText}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#d4af37]/40 hover:bg-white/[0.07]"
              >
                <div className="inline-flex rounded-2xl border border-[#d4af37]/30 bg-[#d4af37]/10 p-3 text-[#f2df9b]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.3em] text-[#d4af37]">{t.aboutLabel}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">{t.aboutTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">{t.aboutText1}</p>
            <p className="mt-5 text-lg leading-8 text-white/72">{t.aboutText2}</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#11172a] p-8 shadow-2xl">
            <h3 className="text-xl font-semibold text-white">{t.whyTitle}</h3>
            <div className="mt-6 space-y-4">
              {t.whyItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.3em] text-[#d4af37]">{t.approachLabel}</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">{t.approachTitle}</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.approachSteps.map((step) => (
            <div key={step.title} className="rounded-[28px] border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[36px] border border-[#d4af37]/20 bg-gradient-to-br from-[#151b31] to-[#0f1426] p-8 shadow-2xl md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.3em] text-[#d4af37]">{t.contactLabel}</div>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">{t.contactTitle}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{t.contactText}</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white p-8 text-slate-900 shadow-xl">
            <div className="text-lg font-semibold">{t.detailsTitle}</div>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div>
                <div className="font-medium text-slate-900">{t.companyLabel}</div>
                <div>Strategy &amp; Architecture</div>
              </div>
              <div>
                <div className="font-medium text-slate-900">{t.emailLabel}</div>
                <div>global@cloud-ea.com</div>
              </div>
              <div>
                <div className="font-medium text-slate-900">{t.phoneLabel}</div>
                <div>+48 512088561</div>
              </div>
              <div>
                <div className="font-medium text-slate-900">{t.linkedinLabel}</div>
                <div>linkedin.com/company/cloudea1</div>
              </div>
            </div>
            <button className="mt-8 rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
              {t.contactButton}
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0a0f1d]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Strategy &amp; Architecture. {t.footer}</div>
          <div>{t.policy}</div>
        </div>
      </footer>
    </div>
  );
}
