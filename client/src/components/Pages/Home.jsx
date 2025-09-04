import Footer from "../Footer";
import Navbar from "../Navbar";
import Hero from "../HomePage/Hero";
import { BrainCog, Frown, Timer } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <Challenge />
      <Footer />
    </div>
  );
}

function Challenge() {
  return (
    <div className="flex flex-col items-center justify-center text-xl mb-5">
      <p className="text-4xl font-semibold mb-5">
        The Challenge with Traditional Diagnosis
      </p>
      <div className="flex gap-15 w-full justify-center mt-8 mb-5">
        <ChallengeCard
          Icon={<Timer size={50} color="blue" />}
          title="Slow, Manual Process"
          text="Delayed analysis & human effort"
        />
        <ChallengeCard
          Icon={<BrainCog size={50} color="blue" />}
          title="Prone to Human Error"
          text="Inaccurate readings lead to misdiagnosis"
        />
        <ChallengeCard
          Icon={<Frown size={50} color="blue" />}
          title="Delays and Stress"
          text="Anxiety for patients, worsened outcomes"
        />
      </div>
    </div>
  );
}

function ChallengeCard({ Icon, title, text }) {
  return (
    <div className="p-10 w-[20vw] shadow-2xl rounded-lg flex flex-col text-center gap-5 items-center bg-white">
      {Icon}
      <div className="text-center mb-5">
        <p className="text-blue-600 text-xl font-semibold mb-2">{title}</p>
        <p className="text-gray-600 text-base">{text}</p>
      </div>
    </div>
  );
}
