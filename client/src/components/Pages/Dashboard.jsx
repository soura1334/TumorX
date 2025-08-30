import { useNavigate } from "react-router-dom";
import Form from "../Form";
import { useAuth } from "../../contexts/AuthContext";

export default function Dashboard() {

  const navigate = useNavigate();

  const {logout} = useAuth();

  return (
    <div className="bg-[#FDF7E4] min-h-screen">
      <div
        className="bg-[#1E3A8A] text-[#FAEED1] flex p-5 gap-2 items-center justify-between shadow-xl"
      >
        <div className="flex gap-2" onClick={() => navigate("/")}>
          <p>Logo</p>
          <p>TumorX</p>
        </div>
        <button className="bg-[#df3939] px-5 rounded-md py-1 hover:bg-[#9a1616] text-[#ffffff]" onClick={logout}>
          Logout
        </button>
      </div>
      <Form />
    </div>
  );
}
