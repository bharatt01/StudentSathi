import { ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SuperAdmin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center">

        <div className="w-20 h-20 rounded-2xl bg-blue-600 mx-auto flex items-center justify-center">
          <ShieldCheck size={40} className="text-white" />
        </div>

        <h1 className="text-4xl font-bold text-white mt-6">
          Student Sathi
        </h1>

        <p className="text-slate-400 mt-3">
          Super Admin Portal
        </p>

        <button
          onClick={() => navigate("/superadmin/login")}
          className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
        >
          Continue
        </button>

      </div>
    </div>
  );
}