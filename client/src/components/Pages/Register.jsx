import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const { setIsAuthenticated } = useAuth();

  async function onRegister(data) {
    const payload = { ...data, name: `${data.firstName}${data.lastName}` };
    delete payload.firstName;
    delete payload.lastName;
    const res = await fetch("http://localhost:8080/register", {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const apidata = await res.json();
    localStorage.setItem("tumorx", JSON.stringify(apidata));
    setIsAuthenticated(true);
    console.log(apidata);
    navigate("/", { replace: true });
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-[#1E3A8A] text-[#FAEED1] flex p-5 gap-2 items-center">
        <div className="flex gap-2" onClick={() => navigate("/")}>
          <p>Logo</p>
          <p>TumorX</p>
        </div>
      </div>
      <div className="flex justify-center items-center h-[90vh]">
        <form
          className="flex flex-col justify-evenly w-[30vw] shadow-2xl  px-10 py-5 rounded-lg"
          onSubmit={handleSubmit(onRegister)}
        >
          <p className="text-3xl text-center font-semibold text-blue-500">
            Register
          </p>
          <label htmlFor="fname" className="mt-5 mb-2">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            className="border rounded-sm mb-5"
            {...register("firstName", { required: true, minLength: 3 })}
          ></input>
          <label htmlFor="lname" className=" mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            className="border rounded-sm mb-5"
            {...register("lastName", { required: true })}
          ></input>
          <label htmlFor="email" className=" mb-2">
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
          <button
            className="bg-blue-500 text-white py-2 my-5 rounded-md"
            disabled={isSubmitting}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
