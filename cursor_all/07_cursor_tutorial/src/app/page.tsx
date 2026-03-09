import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { TutorialOverview } from "@/components/TutorialOverview";
import { GettingStarted } from "@/components/GettingStarted";
import { EmailCapture } from "@/components/EmailCapture";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <TutorialOverview />
      <EmailCapture />
      <GettingStarted />
    </div>
  );
}