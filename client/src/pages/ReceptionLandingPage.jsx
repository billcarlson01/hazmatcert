import React, { useState } from 'react';
import logo from '../assets/hazmatcert-logo.png';

export default function ReceptionLandingPage() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus('loading');
    try {
      const response = await fetch('https://formspree.io/f/xyzwaqzd', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4 py-10 text-center">
      <img
        src={logo}
        alt="HazmatCert Logo"
        className="mb-10 w-64 h-auto"
      />

      <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-6">
        HazmatCert – FMCSA Hazmat Theory Training, 100% Online
      </h1>

      <p className="text-lg mb-6 text-gray-700 max-w-xl">
        HazmatCert.com is launching soon. Our self-paced, FMCSA-registered hazmat theory training is built for truck drivers — accessible from your truck, rest stop, or favorite coffee shop. No classroom needed. All online, super friendly, and includes practice questions to help you pass the DMV exam.
      </p>

      {status !== 'success' && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Submitting…' : 'Join Waitlist'}
          </button>
        </form>
      )}

      {status === 'success' && (
        <p className="text-green-600 font-semibold mt-4">
          Thank you! You're on the waitlist. We'll be in touch soon.
        </p>
      )}

      {status === 'error' && (
        <p className="text-red-600 mt-4">
          Something went wrong. Please try again later.
        </p>
      )}

      <p className="mt-4 text-sm text-gray-500">
        We’ll only contact you about the launch — no spam, ever.
      </p>
    </div>
  );
}
