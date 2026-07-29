"use client";

import { useState, useRef, useEffect } from "react";

const services = [
  { id: "web-app", label: "Web & App Development", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { id: "ui-ux", label: "UI/UX Design", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
  { id: "consulting", label: "Tech Consulting", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { id: "full-package", label: "Full Package", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
];

const budgets = [
  { id: "starter", label: "Under KES 50K", desc: "Landing page or simple site" },
  { id: "growth", label: "KES 50K – 150K", desc: "Multi-page site or app" },
  { id: "scale", label: "KES 150K – 500K", desc: "Complex platform or SaaS" },
  { id: "enterprise", label: "KES 500K+", desc: "Enterprise solution" },
];

const timelines = [
  { id: "asap", label: "ASAP", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { id: "1-month", label: "1 Month", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { id: "2-3-months", label: "2–3 Months", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { id: "flexible", label: "Flexible", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
];

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [step]);

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return formData.name.trim() !== "" && formData.email.trim() !== "";
      case 1:
        return formData.service !== "";
      case 2:
        return formData.budget !== "" && formData.timeline !== "";
      case 3:
        return formData.message.trim() !== "";
      default:
        return false;
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gold-400/5 to-white p-10 text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-gold-400/20 animate-ping" />
          <div className="relative w-20 h-20 rounded-full bg-gold-400/20 flex items-center justify-center">
            <svg className="w-10 h-10 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          We&apos;ll be in touch soon!
        </h3>
        <p className="text-gray-500 leading-relaxed mb-6 max-w-md mx-auto">
          Thanks <span className="font-semibold text-gray-700">{formData.name}</span>! We&apos;ve received your project details and will get back to you within 24 hours.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Typically responds within a few hours
        </div>
      </div>
    );
  }

  return (
    <div ref={formRef}>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Step {step + 1} of {totalSteps}
          </span>
          <span className="text-xs font-semibold text-gold-500">
            {Math.round(progress)}% complete
          </span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gold-400 to-amber-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          {["Details", "Service", "Budget", "Message"].map((label, i) => (
            <button
              key={label}
              onClick={() => i < step && setStep(i)}
              className={`text-xs font-medium transition-colors ${
                i <= step ? "text-gold-500" : "text-gray-300"
              } ${i < step ? "cursor-pointer hover:text-gold-600" : "cursor-default"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="min-h-[320px]">
        {/* Step 1: Personal details */}
        {step === 0 && (
          <div className="space-y-5 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Let&apos;s start with the basics</h3>
              <p className="text-sm text-gray-500">Tell us who you are so we can personalize your experience.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="relative">
                <label htmlFor="name" className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                  focusedField === "name" || formData.name ? "top-1 text-[10px] font-semibold text-gold-500" : "top-3.5 text-sm text-gray-400"
                }`}>
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 pt-5 pb-2 rounded-xl border-2 border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:border-gold-400 transition-all"
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                  focusedField === "email" || formData.email ? "top-1 text-[10px] font-semibold text-gold-500" : "top-3.5 text-sm text-gray-400"
                }`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 pt-5 pb-2 rounded-xl border-2 border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:border-gold-400 transition-all"
                />
              </div>
            </div>
            <div className="relative">
              <label htmlFor="company" className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                focusedField === "company" || formData.company ? "top-1 text-[10px] font-semibold text-gold-500" : "top-3.5 text-sm text-gray-400"
              }`}>
                Company Name (optional)
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                onFocus={() => setFocusedField("company")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 pt-5 pb-2 rounded-xl border-2 border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:border-gold-400 transition-all"
              />
            </div>
          </div>
        )}

        {/* Step 2: Service selection */}
        {step === 1 && (
          <div className="space-y-5 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">What do you need help with?</h3>
              <p className="text-sm text-gray-500">Select the service that best matches your needs.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, service: service.id })}
                  className={`p-4 rounded-xl border-2 text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                    formData.service === service.id
                      ? "border-gold-400 bg-gold-400/5 shadow-md shadow-gold-400/10"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                    formData.service === service.id ? "bg-gold-400 text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={service.icon} />
                    </svg>
                  </div>
                  <p className={`text-sm font-semibold ${formData.service === service.id ? "text-gray-900" : "text-gray-700"}`}>
                    {service.label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Budget & timeline */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Budget & timeline</h3>
              <p className="text-sm text-gray-500">This helps us tailor the best solution for you.</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Estimated budget</p>
              <div className="grid grid-cols-2 gap-2">
                {budgets.map((budget) => (
                  <button
                    key={budget.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: budget.id })}
                    className={`p-3 rounded-xl border-2 text-left transition-all duration-200 hover:scale-[1.01] ${
                      formData.budget === budget.id
                        ? "border-gold-400 bg-gold-400/5"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <p className={`text-sm font-semibold ${formData.budget === budget.id ? "text-gold-600" : "text-gray-700"}`}>
                      {budget.label}
                    </p>
                    <p className="text-xs text-gray-400">{budget.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">When do you need this?</p>
              <div className="grid grid-cols-4 gap-2">
                {timelines.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: t.id })}
                    className={`p-3 rounded-xl border-2 text-center transition-all duration-200 hover:scale-[1.02] ${
                      formData.timeline === t.id
                        ? "border-gold-400 bg-gold-400/5"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <svg className="w-5 h-5 mx-auto mb-1" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={t.icon} />
                    </svg>
                    <p className={`text-xs font-semibold ${formData.timeline === t.id ? "text-gold-600" : "text-gray-600"}`}>
                      {t.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Message */}
        {step === 3 && (
          <div className="space-y-5 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Almost there!</h3>
              <p className="text-sm text-gray-500">Tell us more about what you&apos;re looking to build.</p>
            </div>
            <div className="relative">
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                placeholder="Describe your project idea, the problems you're facing, or what you'd like to achieve. The more detail, the better!"
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gold-400 transition-all resize-none"
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-300">
                {formData.message.length} chars
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Summary</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-400">Name:</span>{" "}
                  <span className="text-gray-700 font-medium">{formData.name}</span>
                </div>
                <div>
                  <span className="text-gray-400">Service:</span>{" "}
                  <span className="text-gray-700 font-medium">
                    {services.find((s) => s.id === formData.service)?.label || "—"}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Budget:</span>{" "}
                  <span className="text-gray-700 font-medium">
                    {budgets.find((b) => b.id === formData.budget)?.label || "—"}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Timeline:</span>{" "}
                  <span className="text-gray-700 font-medium">
                    {timelines.find((t) => t.id === formData.timeline)?.label || "—"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
        <button
          type="button"
          onClick={prevStep}
          className={`flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors ${
            step === 0 ? "invisible" : ""
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {step < totalSteps - 1 ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!canProceed()}
            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
              canProceed()
                ? "bg-gold-400 text-ink-900 hover:bg-gold-300 shadow-lg shadow-gold-400/20 hover:scale-[1.02] active:scale-[0.98]"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canProceed()}
            className={`px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
              canProceed()
                ? "bg-gold-400 text-ink-900 hover:bg-gold-300 shadow-lg shadow-gold-400/20 hover:scale-[1.02] active:scale-[0.98]"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Send Message
          </button>
        )}
      </div>
    </div>
  );
}
