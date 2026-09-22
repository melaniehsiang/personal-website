import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
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
    <article className="ml-auto mt-14 max-w-3xl text-right">
      <div className="ml-auto grid aspect-video w-[28rem] max-w-full place-items-center rounded-2xl border border-skyAccent/25 bg-babyBlue/20 text-center font-sans text-xs text-muted-foreground shadow-[0_8px_26px_rgba(31,74,116,0.08)]">
        Video placeholder
      </div>
      <h3 className="mt-6 font-serif text-[clamp(1.5rem,3vw,2.35rem)] leading-tight tracking-[-0.035em] text-foreground">
        {project.title}
      </h3>
      <a
        href={project.figmaUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block font-sans text-base text-foreground underline decoration-skyAccent/40 underline-offset-4 transition hover:-translate-x-1 hover:decoration-skyAccent"
      >
        View Presentation &amp; Prototype
      </a>
      <p className="ml-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-muted-foreground">
        A product case study done in 2023 during my time at Product&nbsp;Space&nbsp;@&nbsp;Berkeley, teaching me the power
        <br />
        of consumer feedback and Figma prototyping.
      </p>
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
      <header className="fixed left-0 top-0 z-20 h-screen w-48 px-4 py-7">
        <nav className="flex h-full flex-col gap-6">
          <a
            href="#top"
            className="ml-3 grid h-[3.75rem] w-[3.75rem] place-items-center rounded-full border border-skyAccent/35 bg-ivory/25 text-[0.8125rem] font-extrabold tracking-tight text-foreground shadow-[0_8px_26px_rgba(31,74,116,0.28)] backdrop-blur-md transition duration-300 hover:scale-105"
          >
            MKH
          </a>
          <div className="flex flex-1 flex-col gap-1.5 text-sm font-bold text-foreground">
            <a className="rounded-xl px-3 py-2 transition duration-300 hover:translate-x-1" href="#about">
              About
            </a>
            <a className="rounded-xl px-3 py-2 transition duration-300 hover:translate-x-1" href="#projects">
              Projects
            </a>
            <a className="rounded-xl px-3 py-2 transition duration-300 hover:translate-x-1" href="#personal">
              Personal
            </a>
            <a className="rounded-xl px-3 py-2 transition duration-300 hover:translate-x-1" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

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
              About
            </h2>
            <div className="mt-10 space-y-8">
              <section>
                <h3 className="font-sans text-foreground" style={{ fontSize: "20px", lineHeight: "28px" }}>
                  Work Experience
                </h3>
                <div className="ml-4 mt-4 w-[calc(100vw-22rem)] font-['Noto_Sans'] text-lg leading-snug text-muted-foreground">
                  <p>The Trade Desk</p>
                  <div className="mt-2 space-y-3">
                    <div className="border-l border-skyAccent/50 pl-4">
                      <div className="flex items-baseline justify-between gap-8">
                        <span>Product Manager I</span>
                        <span className="text-right">Aug 2026</span>
                      </div>
                      <ul className="mt-1 list-['▸'] pl-5 text-[1.0625rem] leading-snug">
                        <li className="pl-2">Impacted by September 2026 layoffs</li>
                      </ul>
                    </div>
                    <div className="border-l border-skyAccent/50 pl-4">
                      <div className="flex items-baseline justify-between gap-8">
                        <span>Product Management Intern</span>
                        <span className="text-right">May 2025 - Aug 2025</span>
                      </div>
                      <ul className="mt-1 list-['▸'] space-y-2 pl-5 text-[1.0625rem] leading-snug">
                        <li className="pl-2">
                          Drove a projected $6.2M lift in multi-retailer spend for FY2026 by building and launching an internal tool to help traders measure audience reach and overlap across campaigns and identify opportunities for additional retail data activation
                        </li>
                        <li className="pl-2">
                          Drove 20% adoption within 2 weeks and a projected 10% increase in workflow efficiency in Q4 by synthesizing 5+ trader feedback interviews into 5 feature requirements to address audience duplication and previously unquantifiable incremental reach
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h3 className="font-sans text-foreground" style={{ fontSize: "20px", lineHeight: "28px" }}>
                  Education
                </h3>
                <div className="ml-4 mt-4 w-[calc(100vw-22rem)] font-['Noto_Sans'] text-lg leading-snug text-muted-foreground">
                  <div className="flex items-baseline justify-between gap-8">
                    <span>University of California, Berkeley</span>
                    <span className="text-right">Aug 2022 - May 2026</span>
                  </div>
                  <p className="mt-1 text-[1.0625rem]">B.A. Cognitive Science &amp; B.A. Data Science</p>
                </div>
              </section>
              <section>
                <h3 className="font-sans text-foreground" style={{ fontSize: "20px", lineHeight: "28px" }}>
                  <a
                    href="/files/Melanie_Hsiang_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:translate-x-1"
                  >
                    <span className="underline decoration-skyAccent/40 underline-offset-4 hover:decoration-skyAccent">Resume</span>
                    <span className="ml-[0.15em] inline-block origin-left scale-125">↗</span>
                  </a>
                </h3>
              </section>
            </div>
          </div>
        </section>

        <section id="projects" data-page-title="Projects" className="ml-44 mr-20 min-h-screen py-28">
          <div className="max-w-3xl text-left">
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.045em] text-foreground">
              Projects
            </h2>
            <p className="mt-8 max-w-2xl font-sans text-muted-foreground" style={{ fontSize: "20px", lineHeight: "28px" }}>
              I see each one of my projects as stepping stones along the path where I navigate and deepen my interests. The adventure I am currently embarking on is Product — <em>building for and with people</em>.
            </p>
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
