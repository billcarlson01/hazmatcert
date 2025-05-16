import React from 'react';
import { CheckCircle, BookOpen } from "lucide-react";

export default function Pilot() {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800">
      <header className="mb-10 text-center">
        <div className="flex justify-center mb-4">
          <img
            src="/images/nevada-desert-logo.webp"
            alt="Nevada Desert Truck Driving School Logo"
            width={180}
            height={78}
          />
        </div>
        <h1 className="text-4xl font-bold text-[#17478F]">
          HazmatCert Pilot Program for Nevada Desert Truck Driving School
        </h1>
        <p className="mt-4 text-lg">
          Offer FMCSA-compliant hazmat endorsement training to your students — fast, easy, and online.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="border rounded-lg shadow p-6 bg-white">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="text-blue-600" />
            <h2 className="text-xl font-semibold">What We’re Offering</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Free access for up to 5 students to test the course</li>
            <li>Online training that aligns with 49 CFR Part 380</li>
            <li>Completion certificates delivered instantly</li>
            <li>Optional admin dashboard for progress tracking</li>
          </ul>
        </div>

        <div className="border rounded-lg shadow p-6 bg-white">
          <div className="flex items-center gap-4 mb-4">
            <CheckCircle className="text-green-600" />
            <h2 className="text-xl font-semibold">Why Partner With Us</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Add hazmat theory to your offering with no extra admin</li>
            <li>Give your students a smoother path to HME certification</li>
            <li>Stand out from competing CDL schools</li>
            <li>Option to co-brand the experience for your school website</li>
          </ul>
        </div>
      </section>

      <div className="text-center">
        <a
          href="https://calendly.com/wwcarlson/15min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-lg">
            Schedule a 10-Minute Call
          </button>
        </a>
        <p className="mt-4 text-sm text-gray-600">
          Or contact Bill Carlson directly at wwcarlson@gmail.com
        </p>
      </div>
    </div>
  );
}
