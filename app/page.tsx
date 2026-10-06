import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ValuePillars from "@/components/ValuePillars";
import PhysicalFeatures from "@/components/PhysicalFeatures";
import TechnologyFeatures from "@/components/TechnologyFeatures";
import HowItWorks from "@/components/HowItWorks";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col scroll-smooth">
      <Hero />
      <ProblemSolution />
      <PhysicalFeatures />
      <TechnologyFeatures />
      <ValuePillars />
      <HowItWorks />
      <LeadForm />
    </main>
  );
}
