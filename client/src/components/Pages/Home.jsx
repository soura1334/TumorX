import Footer from "../Footer";
import Navbar from "../Navbar";
import Hero from "../HomePage/Hero";
import ChallengeSol from "../HomePage/ChallengeSol"

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <ChallengeSol />
      <Footer />
    </div>
  );
}

