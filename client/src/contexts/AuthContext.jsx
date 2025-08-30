import { createContext, useContext, useEffect, useState } from "react";
import { replace, useNavigate } from "react-router-dom";

const AuthenticationContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [loading, setLoading] = useState(true); 

  const navigate = useNavigate();

  useEffect(() => {
    async function authenticate() {
      const tokenData = localStorage.getItem("tumorx");
      const token = tokenData ? JSON.parse(tokenData).token : null;

      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:8080/signin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem("tumorx");
        }
      } catch (err) {
        console.error(err);
        setIsAuthenticated(false);
        localStorage.removeItem("tumorx"); 
      } finally {
        setLoading(false);
      }
    }

    authenticate();
  }, []);

  function logout(){
    localStorage.removeItem("tumorx");
    setIsAuthenticated(false);
    navigate("/", {replace: true});
  }

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, loading, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthenticationContext);
}

export { useAuth, AuthProvider };
