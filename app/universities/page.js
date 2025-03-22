"use client"; // Ensure client-side execution

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://wiseway.wmsapphub.com";

const Universities = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch(`${API_URL}/api/user/getuniversity/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
          cache: "no-store",
        });

        if (!response.ok) throw new Error(`API error: ${response.statusText}`);

        const data = await response.json();
        if (!data || !data.university)
          throw new Error("Invalid API response format");

        setUniversities(data.university);
      } catch (err) {
        console.error("Error fetching universities:", err);
        setError("Failed to load universities");
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error)
    return <div className="text-center p-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-5xl lg:text-7xl font-bold text-center my-6 text-gray-900">
        Universities
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 lg:gap-y-28 py-10">
        {universities.length > 0 ? (
          universities.map((uni) => (
            <div
              key={uni.id}
              className="bg-white shadow-[8px_8px_10px_rgba(0,0,0,0.2)] rounded-xl overflow-hidden"
            >
              <Image
                src={uni.image ? `${API_URL}/${uni.image}` : "/default-image.jpg"}
                alt={uni.universityname}
                width={400}
                height={250}
                className="w-full h-56 object-cover rounded-b-xl text-black"
                priority
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold text-black">
                  {uni.universityname}
                </h2>
                <p className="mt-2 text-black">
                  {uni.description.length > 100
                    ? uni.description.slice(0, 150) + "..."
                    : uni.description || "No description available."}
                </p>
              </div>
              <button className="bg-[#1E293B] px-9 p-1 font-bold mx-36 m-3 text-white">
                View
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">No universities found</p>
        )}
      </div>
    </div>
  );
};

// Dynamically import the Universities component to prevent hydration mismatch
export default dynamic(() => Promise.resolve(Universities), { ssr: false });
