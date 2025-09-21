import { useState } from "react";
import LogRegNavbar from "../LogRegNavbar";
import LoginForm from "../LoginRegComps/LoginForm";
import Tabs from "../LoginRegComps/Tabs";

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-50 relative">
      <LogRegNavbar />
      <Tabs>
        <LoginForm />
      </Tabs>
    </div>
  );
}
