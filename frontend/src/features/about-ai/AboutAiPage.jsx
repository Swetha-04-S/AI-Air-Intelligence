import WorkflowGrid from "../../components/about-ai/WorkflowGrid";
import PipelineDiagram from "../../components/about-ai/PipelineDiagram";
import TechStack from "../../components/about-ai/TechStack";
import FutureVision from "../../components/about-ai/FutureVision";

export default function AboutAiPage() {
  return (
    <div className="p-10 space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-white">
          🤖 AI Engine
        </h1>

        <p className="mt-2 text-slate-400">
          Discover how AI powers the Smart City Air Intelligence Platform.
        </p>

      </div>

      <WorkflowGrid />

      <PipelineDiagram />

      <TechStack />

      <FutureVision />

    </div>
  );
}