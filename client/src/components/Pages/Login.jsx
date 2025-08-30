import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const { setIsAuthenticated } = useAuth();

  async function onLogin(data) {
    const res = await fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const apiRes = await res.json();
    localStorage.setItem("tumorx", JSON.stringify(apiRes));
    setIsAuthenticated(true);
    navigate("/", {replace: true})
  }

  return (
    <div className="min-h-screen bg-[#FAEED1]">
      <div className="bg-[#1E3A8A] text-[#FAEED1] flex p-5 gap-2 items-center shadow-xl">
        <div className="flex gap-2" onClick={()=> navigate("/")}>
          <p>Logo</p>
          <p>TumorX</p>
        </div>
      </div>
      <div className="flex justify-center items-center h-[90vh]">
        <form
          className="flex flex-col justify-evenly w-[30vw] bg-white  px-10 py-5 rounded-lg"
          onSubmit={handleSubmit(onLogin)}
        >
          <p className="text-3xl text-center font-semibold text-blue-500">
            Login
          </p>
          <label htmlFor="email" className="mt-5 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="border rounded-sm mb-5"
            {...register("email", { required: true })}
          ></input>
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="border rounded-sm mb-5"
            {...register("password", { required: true })}
          ></input>
          <button className="bg-blue-500 text-white py-2 my-5 rounded-md">
            Login
          </button>
          <div className="flex justify-center gap-2">
            <span className="text-black">Don't have an account?</span>
            <button
              className="text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                navigate("/register");
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
