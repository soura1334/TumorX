import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Eye, EyeClosed } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [viewPass, setViewPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onLogin(data) {
    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Invalid email or password");
      }

      const apiRes = await res.json();
      localStorage.setItem("tumorx", JSON.stringify(apiRes));

      setIsAuthenticated(true);
      navigate("/", { replace: true });
    } catch (err) {
      setErrorMsg(err.message);
      setTimeout(() => setErrorMsg(""), 4000); 
    }
  }

  function handleViewPass() {
    setViewPass((prev) => !prev);
  }

  return (
    <div className="min-h-screen bg-slate-50 relative">
      <div className="bg-white/80 backdrop-blur-md flex py-5 justify-between items-center shadow-xl">
        <div
          className="flex gap-2 items-center ml-5 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/logo.png" className="h-10" alt="TumorX Logo" />
          <p className="text-blue-500 font-bold text-2xl">TumorX</p>
        </div>
      </div>

      <div className="flex justify-center items-center h-[90vh] relative">
        <form
          onSubmit={handleSubmit(onLogin)}
          className="flex flex-col justify-evenly w-[30vw] shadow-2xl px-10 py-5 rounded-lg bg-white relative"
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
            className="border rounded-sm mb-2 p-2"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mb-2">
              {errors.email.message}
            </span>
          )}

          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <div className="relative mb-2">
            <input
              type={viewPass ? "text" : "password"}
              name="password"
              className="border rounded-sm p-2 w-full pr-10"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/,
                  message:
                    "Password must be at least 8 characters, include uppercase, lowercase, and a special character",
                },
              })}
            />
            {viewPass ? (
              <Eye
                size={20}
                onClick={handleViewPass}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              />
            ) : (
              <EyeClosed
                size={20}
                onClick={handleViewPass}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              />
            )}
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm mb-2">
              {errors.password.message}
            </span>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="py-2 my-5 rounded-md transition 
        bg-blue-500 hover:bg-blue-600 text-white
        disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          <div className="flex justify-center gap-2">
            <span className="text-black">Don't have an account?</span>
            <button
              className="text-blue-500 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                navigate("/register");
              }}
            >
              Register
            </button>
          </div>

          {errorMsg && (
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg w-[28vw] text-center">
              {errorMsg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
