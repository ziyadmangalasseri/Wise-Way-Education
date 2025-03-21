import React from "react";
import Image from "next/image";

// ✅ SEO Metadata (for better search engine ranking)
export const metadata = {
  title: "Top Universities - Explore Global Universities",
  description:
    "Find information about top universities worldwide, including details, images, and history.",
  keywords:
    "universities, global education, top universities, college information",
};

export default async function Universities() {
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "https://wiseway.wmsapphub.com";

  let universities = [];
  let error = null;

  try {
    // ✅ Fetch data from API using POST request
    const response = await fetch(`${API_URL}/api/user/getuniversity/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
      cache: "no-store", // Ensures fresh data
    });

    if (!response.ok) throw new Error(`API error: ${response.statusText}`);

    const data = await response.json();
    if (!data || !data.university)
      throw new Error("Invalid API response format");

    universities = data.university;
  } catch (err) {
    console.error("Error fetching universities:", err);
    error = "Failed to load universities";
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center my-6 text-gray-900">
        Universities
      </h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {universities.length > 0 ? (
          universities.map((uni) => (
            <div
              key={uni.id}
              className="bg-white shadow-2xl rounded-lg overflow-hidden"
            >
              <Image
                src={
                  uni.image ? `${API_URL}/${uni.image}` : "/default-image.jpg"
                }
                alt={uni.universityname}
                width={400}
                height={250}
                className="w-full h-48"
                priority
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {uni.universityname}
                </h2>
                <p className="text-gray-600 mt-2">
                  {uni.description || "No description available."}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">No universities found</p>
        )}
      </div>
    </div>
  );
}
