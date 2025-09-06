import { Brain, ShieldCheck, Upload } from "lucide-react";
import React from "react";

export default function HowItWorks() {
  return (
    <div className="bg-slate-50 pb-8 ">
      <h2 className="text-4xl text-blue-700 mt-5 text-center font-semibold">
        How TumorX Works
      </h2>
      <h5 className="text-center my-5 text-gray-600">
        A simple, seamless process designed for users and hospitals
      </h5>
      <div className="flex justify-center gap-15 my-8">
        <StepCard
          step={1}
          title="Upload MRI Scans"
          text="Hospitals or users securely upload patient scans."
          Icon={<Upload size={50} color="blue" className="my-2" />}
        />
        <StepCard
          step={2}
          title="AI Analyzes in Minutes"
          text="Our model processes images rapidly with precise results."
          Icon={<Brain size={50} color="violet" className="my-2" />}
        />
        <StepCard
          step={3}
          title="Review & Act Quickly"
          text="Doctors get insights to make faster, smarter treatment decisions."
          Icon={<ShieldCheck size={50} color="lime" className="my-2" />}
        />
      </div>
    </div>
  );
}

function StepCard({ step, text, title, Icon }) {
  return (
    <div className="bg-white w-[20vw] p-10 flex flex-col items-center gap-5 rounded-xl shadow-xl">
      <div className=" font-bold text-white bg-blue-600 rounded-full text-xl flex items-center justify-center h-12 w-12 p-5">
        {step}
      </div>
      {Icon}
      <div className="text-center mb-5">
        <p className="text-blue-600 text-xl font-semibold mb-2">{title}</p>
        <p className="text-gray-600 text-base">{text}</p>
      </div>
    </div>
  );
}
