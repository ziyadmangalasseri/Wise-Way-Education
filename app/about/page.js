"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.post(
          "https://wiseway.wmsapphub.com/api/user/getaboutus/",
          {},
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        setAboutData(response.data.aboutus || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto p-14 space-y-16">
      {/* Section 1 */}
      {aboutData.map((item) =>
        item.key === "Section1" ? (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-center p-10"
          >
            <div className="md:w-1/2 text-left">
              <h1 className="text-7xl w-[100%] font-bold text-gray-900">
                {item.title}
              </h1>
            </div>
            <div className="hidden md:block h-52 w-[1px] bg-gray-400 mx-6"></div>
            <div className="md:w-1/2 text-left">
              <p className="w-[90%] md:ml-3 text-black text-2xl">
                {item.description}
              </p>
            </div>
          </div>
        ) : null
      )}

      {/* Section 2 */}
      {aboutData.map((item) =>
        item.key === "Section2" ? (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between p-10"
          >
            {/* Image Section */}
            <div className="relative grid grid-cols-2 gap-4 w-full max-w-lg mx-auto">
              {/* Images with individual styling */}
              <div className="relative">
                <img
                  src={`https://wiseway.wmsapphub.com/${item.image1}`}
                  alt="About"
                  className="rounded-3xl shadow-lg w-full h-[160px] object-cover"
                />
              </div>
              <div className="relative">
                <img
                  src={`https://wiseway.wmsapphub.com/${item.image2}`}
                  alt="About"
                  className="rounded-3xl shadow-lg w-full h-40 object-cover"
                />
              </div>
              <div className="relative">
                <img
                  src={`https://wiseway.wmsapphub.com/${item.image3}`}
                  alt="About"
                  className="rounded-3xl shadow-lg w-full h-40 object-cover"
                />
              </div>
              <div className="relative">
                <img
                  src={`https://wiseway.wmsapphub.com/${item.image4}`}
                  alt="About"
                  className="rounded-3xl shadow-lg w-full h-40 object-cover"
                />
              </div>

              {/* Circular Badge in Center */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white text-sm font-bold rounded-full flex items-center justify-center w-20 h-20">
                <span className="text-center">
                  10 <br /> years of <br /> Success
                </span>
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 text-left p-6">
              <h3 className="text-green-600 text-lg font-semibold">About Us</h3>
              <h2 className="text-3xl font-bold text-gray-900">{item.title}</h2>
              <p className="text-gray-700 mt-4">{item.description}</p>
            </div>
          </div>
        ) : null
      )}

      {/* Section 3 */}
      {aboutData.map((item) =>
        item.key === "Section3" ? (
          <div key={item.id} className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.description}</p>
            {item.image1 && (
              <img
                src={`https://wiseway.wmsapphub.com/${item.image1}`}
                alt="Story"
                className="rounded-lg shadow-lg w-full h-48 object-cover mt-4"
              />
            )}
          </div>
        ) : null
      )}

      {/* Section 4 */}
      {aboutData.map((item) =>
        item.key === "Section4" ? (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center bg-gray-200 p-6 rounded-lg shadow-md"
          >
            <div className="md:w-1/2 text-center md:text-left p-4">
              <h2 className="text-2xl font-semibold text-green-600 mb-3">
                {item.title}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: item.description }}
                className="text-gray-700"
              />
            </div>
            {item.image1 && (
              <img
                src={`https://wiseway.wmsapphub.com/${item.image1}`}
                alt="Universities"
                className="rounded-lg shadow-lg md:w-1/2 w-full h-48 object-cover"
              />
            )}
          </div>
        ) : null
      )}
    </div>
  );
};

export default About;
