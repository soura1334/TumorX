import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Dashboard from "./components/Pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { FormCtxProvider } from "./contexts/LogRegContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/login" element={<FormCtxProvider><Login /></FormCtxProvider>} />
            <Route path="/register" element={<FormCtxProvider><Register /></FormCtxProvider>} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
