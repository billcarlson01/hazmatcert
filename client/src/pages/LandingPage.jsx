// client/src/pages/LandingPage.jsx
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../assets/hazmatcert-logo.png';
import HeroImage from '../assets/hazmat-training.jpg';

export default function LandingPage() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      appState: { returnTo: '/dashboard' },
    });
  };

  if (isLoading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 text-gray-800">
      <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <img src={Logo} alt="HazmatCert Logo" className="h-12" />
        {!isAuthenticated && (
          <nav className="space-x-4">
            <button
              onClick={handleLogin}
              className="text-blue-700 font-medium hover:underline"
            >
              Log In
            </button>
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </nav>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            FMCSA-Approved Hazmat Theory Certification — Online
          </h1>
          <p className="text-lg text-gray-700">
            Mobile-friendly, instructor-supported training for commercial drivers. Complete the course, pass the final, and get certified fast.
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Certified
            </button>
            <button
              onClick={handleLogin}
              className="text-blue-600 underline text-lg hover:text-blue-800"
            >
              Log In
            </button>
          </div>
        </div>

        <img
          src={HeroImage}
          alt="Hazmat training"
          className="rounded-xl shadow-md w-full object-cover max-h-[500px]"
        />
      </main>

      <section className="mt-20 bg-white py-12 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">Why Choose HazmatCert?</h2>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            <div>
              <p className="text-green-600 text-xl">✅</p>
              <p>Fully online & mobile-friendly</p>
            </div>
            <div>
              <p className="text-green-600 text-xl">✅</p>
              <p>FMCSA-compliant curriculum</p>
            </div>
            <div>
              <p className="text-green-600 text-xl">✅</p>
              <p>Fast certification — complete in a day</p>
            </div>
            <div>
              <p className="text-green-600 text-xl">✅</p>
              <p>Trusted by drivers & schools nationwide</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        HazmatCert.com © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
