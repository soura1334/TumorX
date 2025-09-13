import { BookOpen, Play } from "lucide-react";

export default function CTASec() {
  return (
    <div className="text-center">
      <p class="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-5xl font-extrabold text-transparent m-4 p-2">
        Ready to Experience Smarter Diagnosis?
      </p>
      <p className="text-xl text-gray-700 font-semibold m-2 mb-4">
        Join the future of healthcare. Faster, more accurate, and
        patient-focused diagnosis is here
      </p>
      <div className="m-8">
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
  );
}
