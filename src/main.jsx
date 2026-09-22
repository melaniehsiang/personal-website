import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Mail } from "lucide-react";
import "./index.css";

const projects = [
  {
    title: "Netflix Games: A Case Study",
    figmaUrl: "https://www.figma.com/proto/RQeW2ZigMMTtoTKMr0ZzJj/Presentation?node-id=411-17&p=f&viewport=-1086%2C-39%2C0.14&t=XWUW7E1VF8kO2M87-1&scaling=contain&content-scaling=fixed&starting-point-node-id=411%3A17&page-id=0%3A1",
    blurb: "A product case study done in 2023 during my time at Product\u00a0Space\u00a0@\u00a0Berkeley, teaching me the power of consumer feedback and Figma prototyping.",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="mt-14 flex max-w-5xl items-center gap-12 text-left">
      <div className="grid aspect-video w-[26rem] shrink-0 max-w-full place-items-center rounded-2xl border border-skyAccent/25 bg-babyBlue/20 text-center font-sans text-xs text-muted-foreground shadow-[0_8px_26px_rgba(31,74,116,0.08)]">
        Video placeholder
      </div>
      <div>
        <h3 className="font-serif text-[clamp(1.5rem,3vw,2.35rem)] leading-tight tracking-[-0.035em] text-foreground">
          {project.title}
        </h3>
        <a
          href={project.figmaUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block font-sans text-lg text-foreground underline decoration-skyAccent/40 underline-offset-4 transition hover:translate-x-1 hover:decoration-skyAccent"
        >
          View Presentation &amp; Prototype
        </a>
        <p className="mt-4 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
          A product case study done in 2023 during my time at Product&nbsp;Space&nbsp;@&nbsp;Berkeley, teaching me the power
          <br />
          of consumer feedback and Figma prototyping.
        </p>
      </div>
    </article>
  );
}

function App() {
  useEffect(() => {
    const defaultTitle = "Melanie Hsiang";
    const sections = Array.from(document.querySelectorAll("[data-page-title]"));

    document.title = defaultTitle;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;

        const sectionTitle = visibleEntry.target.dataset.pageTitle;
        document.title = sectionTitle ? `${sectionTitle} - ${defaultTitle}` : defaultTitle;
      },
      { threshold: [0.35, 0.5, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <header className="fixed left-0 top-0 z-20 h-screen w-44 px-4 py-7">
        <nav className="flex h-full flex-col gap-5">
          <a
            href="#top"
            className="ml-3 grid h-[3.4rem] w-[3.4rem] place-items-center rounded-full border border-skyAccent/35 bg-ivory/25 text-xs font-extrabold tracking-tight text-foreground shadow-[0_8px_26px_rgba(31,74,116,0.28)] backdrop-blur-md transition duration-300 hover:scale-105"
          >
            MKH
          </a>
          <div className="flex flex-1 flex-col gap-1 text-[0.8125rem] font-bold text-foreground">
            <a className="rounded-xl px-3 py-2 transition duration-300 hover:translate-x-1" href="#about">
              About.
            </a>
            <a className="rounded-xl px-3 py-2 transition duration-300 hover:translate-x-1" href="#projects">
              Projects.
            </a>
            <a className="rounded-xl px-3 py-2 transition duration-300 hover:translate-x-1" href="#personal">
              Personal.
            </a>

          </div>
        </nav>
      </header>

      <div className="fixed bottom-7 left-7 z-20 flex items-center gap-3 text-foreground">
        <a
          href="mailto:melaniehsiang@berkeley.edu"
          aria-label="Email Melanie Hsiang"
          className="translate-y-0.5 transition duration-300 hover:translate-y-0"
        >
          <Mail size={18} strokeWidth={1.8} />
        </a>
        <a
          href="https://www.linkedin.com/in/melaniehsiang"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="transition duration-300 hover:-translate-y-0.5"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.32 8.02h4.36V23H.32V8.02ZM7.62 8.02h4.18v2.05h.06c.58-1.1 2-2.26 4.12-2.26 4.41 0 5.22 2.9 5.22 6.67V23h-4.35v-7.55c0-1.8-.03-4.12-2.51-4.12-2.52 0-2.9 1.97-2.9 4V23H7.62V8.02Z" />
          </svg>
        </a>
      </div>

      <main className="min-h-screen">
        <section id="top" data-page-title="" className="mx-auto flex min-h-screen w-[min(1120px,calc(100%-32px))] items-center justify-center py-20">
          <div className="text-left">
            <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5.9vw,5.35rem)] leading-[0.95] tracking-[-0.045em] text-foreground">
              Hey, I&apos;m Melanie.
            </h1>
            <p className="mt-7 max-w-2xl origin-left scale-x-95 font-sans text-3xl tracking-normal text-muted-foreground">
              Come walk with me
            </p>
          </div>
        </section>

        <section id="about" data-page-title="About" className="ml-44 mr-20 flex min-h-screen items-center justify-start py-20">
          <div className="max-w-3xl text-left">
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.045em] text-foreground">
              About.
            </h2>
            <div className="mt-10 space-y-8">
              <section>
                <h3 className="font-sans text-foreground" style={{ fontSize: "22px", lineHeight: "30px" }}>
                  Work Experience.
                </h3>
                <div className="mt-4 grid w-[calc(100vw-20rem)] grid-cols-3 gap-8 font-sans text-muted-foreground" style={{ fontSize: "19px", lineHeight: "25px" }}>
                  <div>
                    <p>Full-time</p>
                    <div className="mt-2 space-y-2 font-['Noto_Sans']" style={{ fontSize: "16px", lineHeight: "22px" }}>
                      <div>
                        <div className="flex items-baseline justify-between gap-4">
                          <span>The Trade Desk</span>
                          <span className="text-right opacity-70" style={{ fontSize: "14px", lineHeight: "20px" }}>Aug 2026</span>
                        </div>
                        <div className="mt-1 border-l border-skyAccent/40 pl-3 opacity-70" style={{ fontSize: "14px", lineHeight: "20px" }}>
                          Product Manager I
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Internships</p>
                    <div className="mt-2 space-y-2 font-['Noto_Sans']" style={{ fontSize: "16px", lineHeight: "22px" }}>
                      <div>
                        <div className="flex items-baseline justify-between gap-4">
                          <span>The Trade Desk</span>
                          <span className="text-right opacity-70" style={{ fontSize: "14px", lineHeight: "20px" }}>Summer 2025</span>
                        </div>
                        <div className="mt-1 border-l border-skyAccent/40 pl-3 opacity-70" style={{ fontSize: "14px", lineHeight: "20px" }}>
                          Product Management Intern
                        </div>
                      </div>
                      <div>
                        <div className="flex items-baseline justify-between gap-4">
                          <span>Amazon</span>
                          <span className="text-right opacity-70" style={{ fontSize: "14px", lineHeight: "20px" }}>Summer 2024</span>
                        </div>
                        <div className="mt-1 border-l border-skyAccent/40 pl-3 opacity-70" style={{ fontSize: "14px", lineHeight: "20px" }}>
                          Program Management Intern
                        </div>
                      </div>
                      <div>
                        <div className="flex items-baseline justify-between gap-4">
                          <span>Sizzle.se</span>
                          <span className="text-right opacity-70" style={{ fontSize: "14px", lineHeight: "20px" }}>Summer 2023</span>
                        </div>
                        <div className="mt-1 border-l border-skyAccent/40 pl-3 opacity-70" style={{ fontSize: "14px", lineHeight: "20px" }}>
                          Product Marketing Intern
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Contract</p>
                    <div className="mt-2 space-y-2 font-['Noto_Sans']" style={{ fontSize: "16px", lineHeight: "22px" }}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span>SAS Institute</span>
                        <span className="text-right opacity-70" style={{ fontSize: "14px", lineHeight: "20px" }}>Aug 2024 - Jan 2025</span>
                      </div>
                      <div className="flex items-baseline justify-between gap-4">
                        <span>Meta</span>
                        <span className="text-right opacity-70" style={{ fontSize: "14px", lineHeight: "20px" }}>Jan 2024 - May 2024</span>
                      </div>
                      <div className="flex items-baseline justify-between gap-4">
                        <span>PG&amp;E</span>
                        <span className="text-right opacity-70" style={{ fontSize: "14px", lineHeight: "20px" }}>Aug 2023 - Dec 2023</span>
                      </div>
                      <div className="flex items-baseline justify-between gap-4">
                        <span>Niantic, Inc.</span>
                        <span className="text-right opacity-70" style={{ fontSize: "14px", lineHeight: "20px" }}>Aug 2022 - Dec 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h3 className="font-sans text-foreground" style={{ fontSize: "22px", lineHeight: "30px" }}>
                  Education.
                </h3>
                <div className="ml-4 mt-4 w-[calc(100vw-21rem)] font-['Noto_Sans'] leading-snug text-muted-foreground" style={{ fontSize: "16px", lineHeight: "22px" }}>
                  <div className="flex items-baseline justify-between gap-8">
                    <span>University of California, Berkeley</span>
                    <span className="text-right">2022-26</span>
                  </div>
                  <p className="mt-1">B.A. Cognitive Science &amp; B.A. Data Science</p>
                </div>
              </section>
              <section>
                <h3 className="font-sans text-foreground" style={{ fontSize: "22px", lineHeight: "30px" }}>
                  <a
                    href="/files/Melanie_Hsiang_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:translate-x-1"
                  >
                    <span className="underline decoration-skyAccent/40 underline-offset-4 hover:decoration-skyAccent">Resume.</span>
                    <span className="ml-[0.15em] inline-block origin-left -translate-y-[0.0625rem] scale-125">↗</span>
                  </a>
                </h3>
              </section>
            </div>
          </div>
        </section>

        <section id="projects" data-page-title="Projects" className="ml-44 mr-20 min-h-screen py-28">
          <div className="max-w-3xl text-left">
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.045em] text-foreground">
              Projects.
            </h2>
            {/* Previous intro: I see each one of my projects as stepping stones along the path where I navigate and deepen my interests. The adventure I am currently embarking on is Product — building for and with people. */}
          </div>

          <div>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
