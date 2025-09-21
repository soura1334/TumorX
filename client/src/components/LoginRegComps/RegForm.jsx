import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogReg } from "../../contexts/LogRegContext";

export default function RegForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const { onRegister, currTab } = useLogReg();

  return (
    <form
      className="flex flex-col justify-evenly w-[30vw] shadow-2xl  px-10 py-5 rounded-lg"
      onSubmit={handleSubmit(onRegister)}
    >
      <p className="text-3xl text-center font-semibold text-blue-500">
        Register
      </p>
      
      {currTab === "user" && (
        <>
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
        </>
      )}

      {currTab == "hospital" && <>
        <label htmlFor="hname" className="mt-5 mb-2">
            Hospital Name
          </label>
          <input
            type="text"
            name="hname"
            className="border rounded-sm mb-5"
            {...register("hospitalName", { required: true, minLength: 3 })}
          ></input>
      </>}


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

      <div className="flex justify-center gap-2">
        <span className="text-black">Already have an account?</span>
        <button
          className="text-blue-500 hover:underline"
          onClick={(e) => {
            e.preventDefault();
            navigate("/login", { replace: true });
          }}
        >
          Login
        </button>
      </div>
    </form>
  );
}
