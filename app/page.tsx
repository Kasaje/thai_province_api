"use client";

import { useState } from "react";

interface Province {
  name: string;
}

export default function Home() {
  const [provinces] = useState<Province[]>([
    { name: "Bangkok" },
    { name: "Chiang Mai" },
    { name: "Phuket" },
    { name: "Ayutthaya" },
    { name: "Pattaya" },
  ]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 font-sans">
      <main className="w-full max-w-2xl p-8 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Thailand Provinces
        </h1>
        {provinces.length > 0 ? (
          <ul className="list-disc pl-5">
            {provinces.map((province, index) => (
              <li key={index} className="text-lg text-gray-700">
                {province.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No provinces available.</p>
        )}
      </main>
    </div>
  );
}
