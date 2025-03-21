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
    <div className="container mx-auto p- space-y-16">
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
            className="flex flex-col md:flex-row items-center justify-between p-14 "
          >
            {/* Image Section */}
            <div className="relative flex flex-col gap-6 w-full max-w-lg mx-auto">
              {/* Top Row */}
              <div className="h-[220px] flex items-end flex-row gap-4">
                {/* Top Left Image */}
                <div className="relative mt-10">
                  <img
                    src={`https://wiseway.wmsapphub.com/${item.image1}`}
                    alt="About"
                    className="rounded-2xl shadow-lg w-[380px] h-[150px] object-cover"
                  />
                </div>
                {/* Top Right Image */}
                <div className="relative -mt-5">
                  <img
                    src={`https://wiseway.wmsapphub.com/${item.image2}`}
                    alt="About"
                    className="rounded-2xl shadow-lg w-[85%] h-[220px] object-cover"
                  />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="h-[220px] items-start flex flex-row gap-4">
                {/* Bottom Left Image */}
                <div className="relative -mt-5 ml-5">
                  <img
                    src={`https://wiseway.wmsapphub.com/${item.image3}`}
                    alt="About"
                    className="rounded-2xl ml-[-20px] mt-3 shadow-lg w-[250px] h-[160px] object-cover"
                  />
                </div>
                {/* Bottom Right Image */}
                <div className="relative -mt-10">
                  <img
                    src={`https://wiseway.wmsapphub.com/${item.image4}`}
                    alt="About"
                    className="rounded-2xl shadow-lg ml-[-20px] mt-8 w-[90%] h-[230px] object-cover"
                  />
                </div>
              </div>

              {/* Circular Badge in Center */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white text-lg ml-[-15px] rounded-full flex items-center italic justify-center w-[130px] h-[130px] shadow-md">
                <span className="text-center leading-tight">
                  10 <br /> years of <br /> Success
                </span>
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-full text-left space-y-4">
              {/* About Us Heading */}
              <h3 className="text-green-600 text-2xl font-extrabold tracking-wide ">
                About Us
              </h3>

              {/* Main Title */}
              <h2 className="text-4xl font-semibold text-gray-900 leading-snug">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-2xl leading-snug">
                {item.description}
              </p>
            </div>
          </div>
        ) : null
      )}

      {/* Section 3 */}
      {aboutData.map((item) =>
        item.key === "Section3" ? (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center md:items-start"
          >
            {/* Left Side - Text Content */}
            <div className=" bg-green-100 p-10 md:w-[65%] h-[650px] flex flex-row ">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h2>
                <p className="text-black text-2xl w-[85%] tracking-wide font-sans font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="absolute w-[650px] h-[450px] mt-14 ml-[800px]">
                <img
                  src={`https://wiseway.wmsapphub.com/${item.image1}`}
                  alt="Story"
                  className=" shadow-lg w-full h-full object-cover"
                />
                {/* Overlapping Box Effect */}
                {/* <div className="absolute top-6 -left-6 w-full h-full bg-green-200 -z-10"></div> */}
              </div>
            </div>

            {/* Right Side - Image */}
          </div>
        ) : null
      )}

      {/* Section 4 */}
      {aboutData.map((item) =>
        item.key === "Section4" ? (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center bg-green-100 mb-14 p-16 shadow-md relative"
          >
            {/* Image Section */}
            <div className="md:w-[50%] relative">
              {item.image1 && (
                <div className="relative w-full h-[500px]">
                  {/* Background shapes */}
                  <div className="absolute top-0 left-0 w-[90%] h-[90%] bg-gray-800 rounded-[40px] -z-10"></div>
                  <div className="absolute top-6 left-6 w-[95%] h-[95%] bg-[#d7e8da] rounded-[40px] -z-20"></div>

                  <img
                    src={`https://wiseway.wmsapphub.com/${item.image1}`}
                    alt="Universities"
                    className=" shadow-lg w-[80%] object-cover"
                  />
                </div>
              )}
            </div>

            {/* Text Content */}
            <div className="md:w-[50%] text-center md:text-left p-6 md:p-10">
              <h2 className="text-5xl text-black font-semibold">
                Study in best
              </h2>
              <h1 className="text-green-400 text-6xl font-extrabold">
                Universities
              </h1>
              <p className="text-black text-lg mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum
              </p>

              {/* Checklist Section */}
              <ul className="mt-6 text-lg text-black space-y-3">
                <li className="flex items-center">
                  <span className="text-green-600 text-xl mr-2">✅</span>
                  Study at prestigious universities with high academic
                  standards.
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 text-xl mr-2">✅</span>
                  Experience a variety of cultures and languages.
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 text-xl mr-2">✅</span>
                  Benefit from lower tuition costs and living expenses.
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 text-xl mr-2">✅</span>
                  Easily explore multiple countries within Europe.
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 text-xl mr-2">✅</span>
                  Gain a globally recognized qualification and expand your
                  network.
                </li>
              </ul>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default About;
