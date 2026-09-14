import React from "react";
import ReactDOM from "react-dom/client";
import { Compass, Map, Mountain, Route, Tent, Users } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import "./index.css";

const journeySteps = [
  {
    step: "01",
    title: "Map the route",
    description: "Research the landscape, understand constraints, and define what success looks like before taking the first step.",
  },
  {
    step: "02",
    title: "Pack with purpose",
    description: "Choose only what matters. Great products, like great packs, balance utility, simplicity, and weight.",
  },
  {
    step: "03",
    title: "Navigate uncertainty",
    description: "Conditions change. Feedback, data, and instinct help adjust the path while keeping the goal in sight.",
  },
  {
    step: "04",
    title: "Create the summit moment",
    description: "Design moments of clarity, delight, and progress that make people feel the journey was worth it.",
  },
];

const principles = [
  {
    icon: Users,
    title: "Start with the human",
    description: "Like hiking with a group, product building begins by understanding people’s pace, needs, fears, and motivations.",
  },
  {
    icon: Compass,
    title: "Design for real conditions",
    description: "Plans meet reality. I value testing, learning, and adapting quickly when the path reveals something new.",
  },
  {
    icon: Route,
    title: "Make progress visible",
    description: "Milestones matter. Clear feedback helps users feel oriented, confident, and excited for what comes next.",
  },
];

function PhotoPlaceholder({ children, className = "" }) {
  return (
    <div className={`grid min-h-72 place-items-center rounded-[2rem] border-2 border-dashed border-forest/30 bg-gradient-to-br from-moss/35 to-clay/20 p-8 text-center font-extrabold text-forest/80 shadow-trail ${className}`}>
      <span>{children}</span>
    </div>
  );
}

function Eyebrow({ children }) {
  return <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-clay">{children}</p>;
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-10 border-b border-border bg-cream/80 backdrop-blur-xl">
        <nav className="mx-auto flex min-h-[72px] w-[min(1120px,calc(100%-32px))] items-center justify-between gap-6 max-sm:flex-col max-sm:items-start max-sm:py-4">
          <a href="#top" className="font-extrabold tracking-tight text-forest">Trail × Product</a>
          <div className="flex flex-wrap gap-5 text-sm font-bold text-pine">
            <a className="hover:text-clay" href="#journey">Journey</a>
            <a className="hover:text-clay" href="#principles">Principles</a>
            <a className="hover:text-clay" href="#gallery">Gallery</a>
            <a className="hover:text-clay" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid min-h-[calc(100vh-72px)] w-[min(1120px,calc(100%-32px))] grid-cols-[1.05fr_0.95fr] items-center gap-14 py-20 max-lg:grid-cols-1">
          <div>
            <Eyebrow>Backpacker • Product Builder • Experience Designer</Eyebrow>
            <h1 className="max-w-4xl font-serif text-[clamp(3rem,7vw,6.8rem)] leading-none tracking-[-0.055em] text-pine">
              Building products like planning a great backpacking trip.
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground">
              Every trail and every product begins with curiosity: a map, a problem, a destination, and the people you hope to bring along. I create experiences that help people move from uncertainty to discovery.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild href="#journey">Explore the journey</Button>
              <Button asChild variant="secondary" href="#gallery">View photo spaces</Button>
            </div>
          </div>
          <PhotoPlaceholder className="min-h-[560px] rotate-[1.5deg] max-lg:min-h-96 max-lg:rotate-0">
            Add hero backpacking photo here
          </PhotoPlaceholder>
        </section>

        <section id="journey" className="mx-auto grid w-[min(1120px,calc(100%-32px))] grid-cols-[0.8fr_1fr] gap-14 border-t border-border py-20 max-lg:grid-cols-1">
          <div>
            <Eyebrow>The connection</Eyebrow>
            <h2 className="font-serif text-[clamp(2.1rem,4vw,4.2rem)] leading-tight tracking-[-0.045em] text-pine">
              Backpacking and product both guide people through change.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-muted-foreground">
            <p>On the trail, you study terrain, pack intentionally, adapt to weather, and keep moving toward a meaningful view. In product, you learn customer needs, prioritize what matters, iterate through uncertainty, and craft moments that make the journey worthwhile.</p>
            <p>I’m drawn to both because they require empathy, resilience, and thoughtful decision-making. The best outcomes are not just destinations—they are experiences people remember.</p>
          </div>
        </section>

        <section className="mx-auto grid w-[min(1120px,calc(100%-32px))] grid-cols-4 gap-4 pb-20 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {journeySteps.map((item) => (
            <Card key={item.step}>
              <span className="mb-8 inline-block font-extrabold text-clay">{item.step}</span>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>{item.description}</CardContent>
            </Card>
          ))}
        </section>

        <section id="principles" className="mx-auto w-[min(1120px,calc(100%-32px))] py-20">
          <div className="mb-9 max-w-3xl">
            <Eyebrow>How I build</Eyebrow>
            <h2 className="font-serif text-[clamp(2.1rem,4vw,4.2rem)] leading-tight tracking-[-0.045em] text-pine">Product principles from the trail</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
            {principles.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <Icon className="mb-6 h-9 w-9 text-clay" aria-hidden="true" />
                <CardTitle>{title}</CardTitle>
                <CardContent>{description}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="gallery" className="mx-auto w-[min(1120px,calc(100%-32px))] py-20">
          <div className="mb-9 max-w-3xl">
            <Eyebrow>Future photo gallery</Eyebrow>
            <h2 className="font-serif text-[clamp(2.1rem,4vw,4.2rem)] leading-tight tracking-[-0.045em] text-pine">Room for the places that shaped the perspective</h2>
            <p className="mt-4 text-muted-foreground">Replace these placeholders with trail photos, product sketches, maps, or behind-the-scenes images.</p>
          </div>
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <PhotoPlaceholder className="col-span-2 shadow-none max-sm:col-span-1"><Mountain className="mb-3 inline h-8 w-8" /> Add mountain pass photo</PhotoPlaceholder>
            <PhotoPlaceholder className="shadow-none"><Tent className="mb-3 inline h-8 w-8" /> Add campsite photo</PhotoPlaceholder>
            <PhotoPlaceholder className="shadow-none"><Map className="mb-3 inline h-8 w-8" /> Add trail map or product sketch</PhotoPlaceholder>
            <PhotoPlaceholder className="col-span-2 shadow-none max-sm:col-span-1">Add summit or team photo</PhotoPlaceholder>
          </div>
        </section>

        <section className="bg-forest px-6 py-24">
          <blockquote className="mx-auto max-w-5xl text-center font-serif text-[clamp(2rem,4vw,4.8rem)] leading-tight text-cream">
            “The best journeys are intentionally designed, openly explored, and remembered through the experiences they create.”
          </blockquote>
        </section>

        <section id="contact" className="mx-auto flex w-[min(1120px,calc(100%-32px))] items-center justify-between gap-6 py-20 max-lg:flex-col max-lg:items-start">
          <div>
            <Eyebrow>Let’s connect</Eyebrow>
            <h2 className="max-w-4xl font-serif text-[clamp(2.1rem,4vw,4.2rem)] leading-tight tracking-[-0.045em] text-pine">Interested in the next trail or product adventure?</h2>
          </div>
          <Button asChild href="mailto:hello@example.com">Email me</Button>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
