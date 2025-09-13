import { useState } from "react";
import LogRegNavbar from "../LogRegNavbar";
import LoginForm from "../LoginRegComps/LoginForm";

export default function Login() {
  const [currTab, setCurrTab] = useState("user");

  function handleSetTab(newTab) {
    if (newTab == currTab) return;

    setCurrTab(newTab);
  }

  return (
    <div className="min-h-screen bg-slate-50 relative">
      <LogRegNavbar />
      <div className="flex flex-col justify-center items-center h-[90vh] relative">
        <div className="flex w-[30vw] justify-around text-xl border-b-2 pb-0 border-gray-200 p-4 z-5 bg-white">
          <p
            className={
              currTab === "user"
                ? "text-blue-500 underline-offset-5 underline"
                : ""
            }
            onClick={() => setCurrTab("user")}
          >
            User Login
          </p>
          <p
            className={
              currTab === "hospital"
                ? "text-blue-500 underline-offset-5 underline"
                : ""
            }
            onClick={() => setCurrTab("hospital")}
          >
            Hospital Login
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
