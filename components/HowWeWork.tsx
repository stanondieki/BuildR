"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Understand",
    short: "We study your business, users, and workflows.",
    detail: "We dive deep into your business model, target audience, pain points, and existing systems to build a complete picture before any design or code begins.",
    deliverables: ["Discovery workshop", "User research", "Technical audit", "Project roadmap"],
    duration: "Week 1",
  },
  {
    number: "02",
    title: "Design",
    short: "We create wireframes, prototypes, and a design system.",
    detail: "Interactive prototypes let you test and refine the experience before development starts — saving time, money, and revisions later.",
    deliverables: ["Wireframes", "Interactive prototype", "Design system", "User testing"],
    duration: "Week 2–3",
  },
  {
    number: "03",
    title: "Build",
    short: "We develop the product with modern, scalable tech.",
    detail: "Clean, maintainable code using battle-tested technologies. Regular demos keep you in the loop at every stage.",
    deliverables: ["Frontend development", "Backend & API", "Database setup", "Weekly demos"],
    duration: "Week 4–8",
  },
  {
    number: "04",
    title: "Launch",
    short: "We deploy, train your team, and make it live.",
    detail: "Seamless deployment with monitoring, analytics, and team training so everyone is confident from day one.",
    deliverables: ["Production deployment", "Analytics setup", "Team training", "Go-live checklist"],
    duration: "Week 9",
  },
  {
    number: "05",
    title: "Improve",
    short: "We iterate based on feedback and real usage.",
    detail: "Post-launch support, performance monitoring, and iterative improvements based on real user data and feedback.",
    deliverables: ["Performance monitoring", "User feedback loop", "Iterative updates", "Ongoing support"],
    duration: "Ongoing",
  },
];

const stepIcons = [
  "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",
  "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const currentStep = activeStep;
  const progressPercent = ((currentStep + 1) / steps.length) * 100;

  return (
    <section id="process" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-400/5 rounded-full blur-[100px]" />

      <div className="container-pad relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="section-label">How We Work</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            From Idea To Launch In <span className="gradient-text">5 Steps</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            A simple, proven process. No surprises, no guesswork. <span className="text-gold-500 text-sm font-medium">Click a step to explore the details</span>
          </p>
        </div>

        {/* Timeline progress bar */}
        <div className="relative mb-12">
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 rounded-full" />
          <div
            className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
          <div className="relative grid grid-cols-5 gap-2">
            {steps.map((step, i) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(i)}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                className="flex flex-col items-center group focus:outline-none"
              >
                {/* Step circle */}
                <div
                  className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                    i <= currentStep
                      ? "bg-gold-400 border-gold-400 text-white scale-100"
                      : "bg-white border-gray-300 text-gray-400"
                  } ${
                    (hoveredStep === i || activeStep === i) && i > currentStep
                      ? "border-gold-400 text-gold-400 scale-110"
                      : ""
                  } ${activeStep === i ? "ring-4 ring-gold-400/20 scale-110" : ""}`}
                >
                  {i < currentStep ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={stepIcons[i]} />
                    </svg>
                  )}
                  {/* Pulse on active */}
                  {activeStep === i && (
                    <span className="absolute inset-0 rounded-full bg-gold-400 animate-ping opacity-20" />
                  )}
                </div>
                {/* Step label */}
                <span className={`mt-3 text-xs font-bold uppercase tracking-wider transition-colors duration-300 hidden sm:block ${
                  i <= currentStep ? "text-gold-500" : "text-gray-400"
                } ${activeStep === i ? "text-gold-600" : ""}`}>
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Left: Step info */}
          <div className="lg:col-span-3 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={stepIcons[currentStep]} />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                    Step {steps[currentStep].number}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {steps[currentStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {steps[currentStep].detail}
              </p>

              {/* Deliverables */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  What you get
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {steps[currentStep].deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Duration + navigation */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Duration card */}
            <div className="bg-ink-900 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/10 rounded-full blur-xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
                    Timeline
                  </span>
                </div>
                <p className="text-3xl font-bold mb-1">
                  {steps[currentStep].duration}
                </p>
                <p className="text-gray-400 text-sm">
                  {currentStep === steps.length - 1
                    ? "We stick around for the long haul"
                    : `Phase ${currentStep + 1} of ${steps.length}`}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
                  currentStep === 0
                    ? "border-gray-100 text-gray-300 cursor-not-allowed"
                    : "border-gray-200 text-gray-700 hover:border-gold-400 hover:text-gold-500 active:scale-[0.98]"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Prev
              </button>
              <button
                onClick={() => setActiveStep(Math.min(steps.length - 1, currentStep + 1))}
                disabled={currentStep === steps.length - 1}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  currentStep === steps.length - 1
                    ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                    : "bg-gold-400 text-white hover:bg-gold-300 shadow-lg shadow-gold-400/20 active:scale-[0.98]"
                }`}
              >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Step indicators */}
            <div className="flex items-center justify-center gap-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentStep
                      ? "w-8 bg-gold-400"
                      : i < currentStep
                      ? "w-2 bg-gold-400/40"
                      : "w-2 bg-gray-200"
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/process" className="btn-outline">
            See The Full Process
          </Link>
        </div>
      </div>
    </section>
  );
}
