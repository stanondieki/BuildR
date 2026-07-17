import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <FadeIn>
          <ProblemSolution />
        </FadeIn>
        <FadeIn>
          <Services />
        </FadeIn>
        <FadeIn>
          <HowWeWork />
        </FadeIn>
        <FadeIn>
          <WhyChooseUs />
        </FadeIn>
        <FadeIn>
          <CTA />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
