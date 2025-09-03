import Navbar from "../Navbar";
import { BookOpen, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <div className="flex justify-around items-center my-20 py-10">
      <div className="text-5xl flex flex-col gap-5">
        <p className="font-bold">Early Detection</p>
        <p className="font-bold">Smarter Care</p>
        <div className="font-bold">
          <span>Powered by </span>
          <span className="text-blue-500">AI</span>
        </div>
        <div className="text-lg my-5 text-gray-700">
          <p>
            TumorX helps patients and hospitals detect brain tumors quickly,
          </p>
          <p>securely, and efficiently with AI-powered MRI analysis.</p>
        </div>
        <div className="text-lg">
          <div className="bg-blue-500 px-5 py-2 text-white rounded-3xl mr-5 inline-flex items-center gap-2">
            <Play size={20} />
            <button>Get Started</button>
          </div>
          <div className="bg-white border-2 border-blue-500 px-5 py-2 text-blue-600 rounded-3xl inline-flex items-center gap-2">
            <BookOpen size={20} />
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <img src="/logo.png" className="h-100" alt="TumorX logo" />
    </div>
  );
}
