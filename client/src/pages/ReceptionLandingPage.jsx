import React, { useState } from 'react';

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
        src="/assets/hazmatcert-logo.png"
        alt="HazmatCert Logo"
        className="w-36 h-36 mb-6"
      />

      <h1 className="text-4xl font-bold text-blue-800 mb-4">
        FMCSA Hazmat Theory Training – Online
      </h1>

      <p className="text-lg max-w-xl mb-8">
        HazmatCert.com is launching soon. Get certified from home with self-paced, FMCSA-registered hazmat training.
        Join the waitlist to be the first to access the course.
      </p>

      {status !== 'success' && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-2"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded shadow w-full sm:w-72"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-700 text-white rounded shadow hover:bg-blue-800"
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

      <p className="text-sm text-gray-500 mt-4">
        We’ll only notify you about the launch – no spam.
      </p>
    </div>
  );
}
