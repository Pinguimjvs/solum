import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ValuePillars from "@/components/ValuePillars";
import HowItWorks from "@/components/HowItWorks";
import LeadForm from "@/components/LeadForm";
import TechSpecs from "@/components/TechSpecs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col scroll-smooth">
      <Hero />
      <ProblemSolution />
      <ValuePillars />
      <TechSpecs />
      <HowItWorks />
      <LeadForm />
    </main>
  );
}
