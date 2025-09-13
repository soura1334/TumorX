import {useNavigate} from "react-router-dom"

export default function LogRegNavbar() {
  const navigate = useNavigate()

  return (
    <div className="bg-white/80 backdrop-blur-md flex py-5 justify-between items-center shadow-xl">
      <div
        className="flex gap-2 items-center ml-5 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/logo.png" className="h-10" alt="TumorX Logo" />
        <p className="text-blue-500 font-bold text-2xl">TumorX</p>
      </div>
    </div>
  );
}
