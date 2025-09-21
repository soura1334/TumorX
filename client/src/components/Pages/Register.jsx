import LogRegNavbar from "../LogRegNavbar";
import RegForm from "../LoginRegComps/RegForm";
import Tabs from "../LoginRegComps/Tabs";

export default function Register() {

  return (
    <div className="min-h-screen bg-slate-50">
      <LogRegNavbar />
      <Tabs><RegForm /></Tabs>
    </div>
  );
}
