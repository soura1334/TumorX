import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const FormContext = createContext();

function FormCtxProvider({ children }) {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
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

  return (
    <FormContext.Provider
      value={{
        onLogin,
        errorMsg
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

export {FormCtxProvider, useLogReg}