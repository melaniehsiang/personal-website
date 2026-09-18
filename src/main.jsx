import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <header className="fixed left-0 top-0 z-20 h-screen w-48 px-4 py-7">
        <nav className="flex h-full flex-col gap-6">
          <a
            href="#top"
            className="ml-3 grid h-[3.75rem] w-[3.75rem] place-items-center rounded-full border border-skyAccent/35 bg-ivory/25 text-[0.8125rem] font-extrabold tracking-tight text-foreground shadow-[0_6px_18px_rgba(56,111,164,0.12)] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-babyBlue/30"
          >
            MKH
          </a>
          <div className="flex flex-1 flex-col gap-1.5 text-sm font-bold text-foreground">
            <a className="rounded-xl px-3 py-2 transition duration-300 hover:translate-x-1 hover:bg-babyBlue/25" href="#projects">
              Projects
            </a>
            <a className="rounded-xl px-3 py-2 transition duration-300 hover:translate-x-1 hover:bg-babyBlue/25" href="#personal">
              Personal
            </a>
            <a className="rounded-xl px-3 py-2 transition duration-300 hover:translate-x-1 hover:bg-babyBlue/25" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="min-h-screen">
        <section className="mx-auto flex min-h-screen w-[min(1120px,calc(100%-32px))] items-center justify-center py-20">
          <div className="text-left">
            <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5.9vw,5.35rem)] leading-[0.95] tracking-[-0.045em] text-foreground">
              Hey, I&apos;m Melanie.
            </h1>
            <p className="mt-7 max-w-2xl origin-left scale-x-95 font-sans text-3xl tracking-normal text-muted-foreground">
              Come walk with me
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
