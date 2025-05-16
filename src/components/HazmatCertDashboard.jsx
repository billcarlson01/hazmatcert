import { useState } from 'react';
import { CheckCircle, FileText } from 'lucide-react';
import Logo from '../assets/hazmatcert-logo.png'; // Adjust path as needed

const modules = [
  "Hazard Classes",
  "Shipping Papers",
  "Placarding & Marking",
  "Emergency Procedures",
  "Security Risks & Plans",
  "FMCSA & DOT Responsibilities",
];

export default function HazmatCertDashboard() {
  const [progress, setProgress] = useState(0);
  const [currentModule, setCurrentModule] = useState(null);

  const handleModuleClick = (index) => {
    setCurrentModule(index);
    setProgress(((index + 1) / (modules.length + 1)) * 100);
  };

  const handleFinish = () => {
    setCurrentModule("Final Exam");
    setProgress(100);
  };

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto bg-gray-50">
      <header className="flex items-center justify-between mb-6">
        <img src={Logo} alt="HazmatCert Logo" className="h-10" />
        <h1 className="text-3xl font-bold text-primary">HazmatCert Training Dashboard</h1>
      </header>

      <div className="mb-6">
        <p className="text-sm font-medium text-gray-600 mb-1">Course Progress</p>
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
          <div className="bg-accent h-4" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {modules.map((mod, idx) => (
          <div
            key={idx}
            className="border border-gray-200 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 cursor-pointer flex items-center gap-4"
            onClick={() => handleModuleClick(idx)}
          >
            <FileText className="text-blue-600" />
            <div>
              <p className="text-lg font-semibold">Module {idx + 1}</p>
              <p>{mod}</p>
            </div>
          </div>
        ))}
        <div
          className="border border-gray-200 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 cursor-pointer flex items-center gap-4"
          onClick={handleFinish}
        >
          <CheckCircle className="text-green-600" />
          <div>
            <p className="text-lg font-semibold">Final Exam</p>
            <p>Complete the course with an 80% or higher</p>
          </div>
        </div>
      </div>

      {currentModule !== null && (
        <div className="border-t pt-6">
          <h2 className="text-2xl font-bold mb-2 text-primary">
            {currentModule === "Final Exam" ? "Final Exam" : modules[currentModule]}
          </h2>
          <p className="text-gray-700">Module content goes here. Add text, video, and quiz logic.</p>
        </div>
      )}

      <footer className="mt-12 text-center text-sm text-gray-500">
        <div className="flex flex-col items-center">
          <img src={Logo} alt="HazmatCert Logo" className="h-6 mb-2" />
          <span>HazmatCert.com | FMCSA-Approved Theory Training</span>
        </div>
      </footer>
    </div>
  );
}
