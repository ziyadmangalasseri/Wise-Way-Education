import React from "react";
import Image from "next/image";

export default async function Universities() {
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "https://wiseway.wmsapphub.com";

  let universities = [];
  let error = null;

  try {
    // Fetch data from API using POST request
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
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-7xl font-bold text-center my-6 text-gray-900">
        Universities
      </h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 lg:gap-y-28 py-10">
        {universities.length > 0 ? (
          universities.map((uni) => (
            <div
              key={uni.id}
              className="bg-white shadow-[8px_8px_10px_rgba(0,0,0,0.2)] rounded-xl overflow-hidden"
            >
              <Image
                src={
                  uni.image ? `${API_URL}/${uni.image}` : "/default-image.jpg"
                }
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
                    ? uni.description.slice(0, 150) + "..." // Truncate  after 50 char
                    : uni.description || "No description available."}
                </p>
              </div>
              <button className="bg-[#1E293B] px-9 p-1  font-bold mx-36 m-3">
                view
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">No universities found</p>
        )}
      </div>
    </div>
  );
}
