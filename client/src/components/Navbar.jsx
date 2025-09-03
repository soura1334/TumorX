import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-white/80 fixed w-full top-0 backdrop-blur-md flex py-5 justify-between items-center shadow-xl">
      <div className="flex gap-4" onClick={() => navigate("/")}>
        <p className="text-blue-600 text-2xl ml-4 font-bold">TumorX</p>
      </div>
      <div className="flex justify-center gap-5 w-[50%] font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          Home
        </NavLink>
        <p>Features</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      {isAuthenticated ? (
        <button
          className="bg-blue-500 px-8 rounded-md mr-4 text-white py-2 hover:bg-blue-600 shadow-lg shadow-blue-500/50"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </button>
      ) : (
        <button
          className="bg-blue-500 px-8 rounded-md mr-4 text-white py-2 hover:bg-blue-600 shadow-lg shadow-blue-500/50 "
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}
    </div>
  );
}
