import { BrainCog, Frown, HeartPulse, Target, Timer, Zap } from "lucide-react";

export default function ChallengeSol() {
  return (
    <div className="bg-blue-50 pb-5">
      <Challenge />
      <Transition />
      <Solution />
      <button></button>
    </div>
  );
}

function Challenge() {
  return (
    <div className="flex flex-col items-center justify-center text-xl mb-5">
      <p className="text-4xl font-semibold mt-5 mb-5">
        The Challenge with Traditional Diagnosis
      </p>
      <div className="flex gap-15 w-full justify-center mt-8 mb-5">
        <Card
          Icon={<Timer size={30} color="blue" />}
          title="Slow & Manual Process"
          text="Traditional methods rely on time-consuming manual work, delaying results when speed matters most."
        />
        <Card
          Icon={<BrainCog size={30} color="blue" />}
          title="Prone to Human Error"
          text="Fatigue and subjectivity can lead to mistakes, risking misdiagnosis and poor treatment outcomes."
        />
        <Card
          Icon={<Frown size={30} color="blue" />}
          title="Delays and Stress"
          text="Long waiting times increase anxiety for patients and affect overall recovery experience."
        />
      </div>
    </div>
  );
}

function Card({ Icon, title, text }) {
  return (
    <div className="p-10 w-[20vw] shadow-2xl rounded-lg flex flex-col text-center gap-5 items-center bg-white">
      <div className="rounded-full border-2 border-blue-700 bg-blue-100 p-4">{Icon}</div>
      <div className="text-center mb-5">
        <p className="text-blue-600 text-xl font-semibold mb-2">{title}</p>
        <p className="text-gray-600 text-base">{text}</p>
      </div>
    </div>
  );
}

function Transition() {
  return (
    <div className="justify-self-center">
      <p className="text-4xl font-semibold mb-5">
        That's where AI-powered diagnosis changes everything
      </p>
    </div>
  );
}

function Solution() {
  return (
    <div className="flex gap-15 w-full justify-center mt-8 mb-5">
      <Card
        Icon={<Zap size={30} color="blue" />}
        title="Fast & Automated"
        text="Our AI processes scans in minutes, eliminating bottlenecks and delivering results quickly."
      />
      <Card
        Icon={<Target size={30} color="blue" />}
        title="Accurate & Reliable"
        text="Our models reduce errors, offering consistent and trustworthy diagnoses."
      />
      <Card
        Icon={<HeartPulse size={30} color="blue" />}
        title="Better Patient Outcomes"
        text="Quicker results bring peace of mind, enabling timely treatment and improved healthcare journeys."
      />
    </div>
  );
}
