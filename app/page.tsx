"use client";

import { useState } from "react";

const apiFeatures = [
  {
    title: "Provinces",
    description: "Get all provinces or details for a specific province by ID.",
    endpoint: "GET /api/province, POST /api/province",
    color: "bg-blue-100 border-blue-400",
    icon: "🌏",
  },
  {
    title: "Districts",
    description:
      "Get all districts, districts by province ID, or details for a specific district.",
    endpoint: "GET /api/district, POST /api/district",
    color: "bg-green-100 border-green-400",
    icon: "🏙️",
  },
  {
    title: "Sub-Districts",
    description:
      "Get all sub-districts, sub-districts by district ID, or details for a specific sub-district.",
    endpoint: "GET /api/subDistrict, POST /api/subDistrict",
    color: "bg-yellow-100 border-yellow-400",
    icon: "🏡",
  },
  {
    title: "API Key Validation",
    description:
      "All endpoints require an x-api-key header for authentication.",
    endpoint: "x-api-key header",
    color: "bg-pink-100 border-pink-400",
    icon: "🔑",
  },
  {
    title: "Local Data",
    description: "Data is served from local JSON files in the data/ directory.",
    endpoint: "data/*.json",
    color: "bg-purple-100 border-purple-400",
    icon: "📁",
  },
];

export default function Home() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-yellow-50 p-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-blue-700 mb-2 animate-fade-in">
            Thai Province API
          </h1>
          <p className="text-base text-gray-600 animate-fade-in delay-100">
            Modern REST API for provinces, districts, and sub-districts in
            Thailand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {apiFeatures.map((feature, idx) => (
            <div
              key={feature.title}
              className={`border-l-4 ${feature.color} rounded-lg shadow-md p-5 flex flex-col items-start transition-transform duration-200 hover:scale-105 hover:shadow-xl animate-fade-in`}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              style={{
                boxShadow:
                  hovered === idx ? "0 8px 32px rgba(0,0,0,0.12)" : undefined,
                transform: hovered === idx ? "scale(1.05)" : undefined,
              }}
            >
              <span
                className="text-3xl mb-2 drop-shadow-sm transition-transform duration-200"
                style={{
                  transform: hovered === idx ? "scale(1.2)" : undefined,
                }}
              >
                {feature.icon}
              </span>
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                {feature.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {feature.description}
              </p>
              <span className="text-xs font-mono text-gray-500 bg-white/60 px-2 py-1 rounded shadow-inner">
                {feature.endpoint}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.7s ease;
        }
        .animate-fade-in.delay-100 {
          animation-delay: 0.1s;
        }
        .animate-fade-in.delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
