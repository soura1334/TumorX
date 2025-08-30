import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-[#1E3A8A] text-[#FAEED1] flex p-5 justify-around items-center shadow-xl">
      <div className="flex gap-4" onClick={() => navigate("/")}>
        <p>Logo</p>
        <p>TumorX</p>
      </div>
      <div className="flex justify-center gap-5 w-[50%]">
        <p>Home</p>
        <p>Contact</p>
        <p>About</p>
        <p>Product</p>
      </div>
      {isAuthenticated ? (
        <button
          className="bg-[#FDF7E4] px-5 rounded-md py-1 hover:bg-[#ada99c] text-[#1E3A8A]"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </button>
      ) : (
        <button
          className="bg-[#FDF7E4] px-5 rounded-md py-1 hover:bg-[#ada99c] text-[#1E3A8A]"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}
    </div>
  );
}
