import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { CheckCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/hazmatcert-logo.png';
import { modules } from '../data/modules';
import LogoutButton from '../components/LogoutButton';

export default function HazmatCertDashboard() {
  const { user } = useAuth0();

  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem("completedModules");
    return saved ? JSON.parse(saved) : [];
  });

  const progress = (completed.length / modules.length) * 100;

  const markCompleted = (slug) => {
    if (!completed.includes(slug)) {
      const updated = [...completed, slug];
      setCompleted(updated);
      localStorage.setItem("completedModules", JSON.stringify(updated));
    }
  };

  const resetProgress = () => {
    localStorage.removeItem("completedModules");
    setCompleted([]);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="HazmatCert Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold text-blue-700">HazmatCert Training Dashboard</h1>
        </div>

        {user && (
          <div className="relative group text-sm text-gray-700">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={user.picture}
                alt={user.name}
                className="h-8 w-8 rounded-full border border-gray-300"
              />
              <span>{user.name}</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <Link
                to="/certificate"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                🎓 View Certificate
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                ⚙️ Settings
              </Link>
              <div className="border-t border-gray-100" />
              <LogoutButton />
            </div>
          </div>
        )}
      </header>

      <div className="mb-4">
        <p className="text-sm font-medium text-gray-600 mb-1">Course Progress</p>
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
          <div className="bg-blue-500 h-4" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm text-gray-600">{Math.round(progress)}% complete</p>
          <button onClick={resetProgress} className="text-sm text-red-500 underline">
            Reset Progress
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {modules
          .filter((mod) => mod.slug !== "final-exam")
          .map((mod) => (
            <Link
              to={`/module/${mod.slug}`}
              key={mod.slug}
              onClick={() => markCompleted(mod.slug)}
              className="border border-gray-200 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 cursor-pointer flex items-center gap-4"
            >
              <FileText className="text-blue-600" />
              <div className="flex-1">
                <p className="text-lg font-semibold flex items-center justify-between">
                  {mod.title}
                  {completed.includes(mod.slug) && (
                    <span className="ml-2 px-2 py-0.5 text-xs text-green-800 bg-green-100 rounded-full">
                      Completed
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-600">{mod.description}</p>
              </div>
            </Link>
          ))}

        <Link
          to="/module/final-exam"
          onClick={() => markCompleted("final-exam")}
          className="border border-gray-200 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 cursor-pointer flex items-center gap-4"
        >
          <CheckCircle className="text-green-600" />
          <div className="flex-1">
            <p className="text-lg font-semibold flex items-center justify-between">
              Final Exam
              {completed.includes("final-exam") && (
                <span className="ml-2 px-2 py-0.5 text-xs text-green-800 bg-green-100 rounded-full">
                  Completed
                </span>
              )}
            </p>
            <p className="text-sm text-gray-600">Complete the course with an 80% or higher</p>
          </div>
        </Link>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-500">
        <div className="flex flex-col items-center">
          <img src={Logo} alt="HazmatCert Logo" className="h-6 mb-2" />
          <span>HazmatCert.com | FMCSA-Approved Theory Training</span>
        </div>
      </footer>
    </div>
  );
}
