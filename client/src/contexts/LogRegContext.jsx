import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const FormContext = createContext();

function FormCtxProvider({ children }) {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");

  const [currTab, setCurrTab] = useState("user");

  function handleSetTab(newTab) {
    if (newTab == currTab) return;

    setCurrTab(newTab);
  }

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
    <FormContext.Provider
      value={{
        onLogin,
        errorMsg,
        currTab,
        handleSetTab,
        onRegister
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useLogReg() {
  const context = useContext(FormContext);
  return context;
}

export { FormCtxProvider, useLogReg };
