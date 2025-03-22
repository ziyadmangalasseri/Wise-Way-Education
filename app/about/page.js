import React from "react";
import Image from "next/image";

const About = async () => {
  let aboutData = [];
  let error = null;

  try {
    const response = await fetch(
      "https://wiseway.wmsapphub.com/api/user/getaboutus/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    aboutData = data.aboutus || [];
  } catch (err) {
    error = err.message;
  }

  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto mb-[200px] space-y-16 px-4 md:px-0">
      {/* Section 1 */}
      {aboutData.map((item) =>
        item.key === "Section1" ? (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-center p-4 md:p-10"
          >
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-7xl font-bold text-gray-900">
                {item.title}
              </h1>
            </div>
            <div className="hidden md:block h-52 w-[1px] bg-gray-400 mx-6"></div>
            <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
              <p className="md:ml-3 text-black text-xl md:text-2xl">
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
            className="flex flex-col md:flex-row items-center justify-between p-4 md:p-14"
          >
            {/* Image Section */}
            <div className="relative flex flex-col gap-6 w-full max-w-lg mx-auto">
              {/* Top Row */}
              <div className="h-[220px] flex items-end flex-row gap-4">
                {/* Top Left Image */}
                <div className="relative mt-10">
                  <Image
                    src={`https://wiseway.wmsapphub.com/${item.image1}`}
                    alt="About"
                    width={380}
                    height={150}
                    className="rounded-2xl h-[130px] w-[260px] shadow-lg object-cover"
                  />
                </div>
                {/* Top Right Image */}
                <div className="relative -mt-5">
                  <Image
                    src={`https://wiseway.wmsapphub.com/${item.image2}`}
                    alt="About"
                    width={320}
                    height={220}
                    className="rounded-2xl h-[200px] w-[190px] shadow-lg object-cover"
                  />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="h-[220px] items-start flex flex-row gap-4">
                {/* Bottom Left Image */}
                <div className="relative -mt-5 ml-5">
                  <Image
                    src={`https://wiseway.wmsapphub.com/${item.image3}`}
                    alt="About"
                    width={250}
                    height={160}
                    className="rounded-2xl ml-[-20px] w-[230px] mt-3 shadow-lg object-cover"
                  />
                </div>
                {/* Bottom Right Image */}
                <div className="relative -mt-10">
                  <Image
                    src={`https://wiseway.wmsapphub.com/${item.image4}`}
                    alt="About"
                    width={320}
                    height={230}
                    className="rounded-2xl shadow-lg h-[200px] w-[260px] ml-[-20px] mt-8 object-cover"
                  />
                </div>
              </div>

              {/* Circular Badge in Center */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white text-lg ml-[-20px] rounded-full flex items-center italic justify-center w-[130px] h-[130px] shadow-md">
                <span className="text-center leading-tight">
                  10 <br /> years of <br /> Success
                </span>
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-full text-center md:text-left space-y-4 mt-8 md:mt-0">
              {/* About Us Heading */}
              <h3 className="text-green-600 text-2xl font-extrabold tracking-wide">
                About Us
              </h3>

              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-xl md:text-2xl leading-snug">
                {item.description}
              </p>
            </div>
          </div>
        ) : null
      )}

      {/* Section 3 - Our Story */}
      {aboutData.map((item) =>
        item.key === "Section3" ? (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center bg-green-100 p-4 md:p-10"
          >
            {/* Left Side - Text Content */}
            <div className="md:w-1/2 text-center md:text-left space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                {item.title}
              </h2>
              <p className="text-black text-xl md:text-2xl leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-[300px] md:h-[450px]">
                <Image
                  src={`https://wiseway.wmsapphub.com/${item.image1}`}
                  alt="Story"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        ) : null
      )}

      {/* Section 4 */}
      {aboutData.map((item) =>
        item.key === "Section4" ? (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center bg-green-100 mb-14 p-4 md:p-16 shadow-md relative"
          >
            {/* Image Section */}
            <div className="md:w-[50%] relative p-4 md:p-10">
              {item.image1 && (
                <div className="relative w-full h-[300px] md:h-[500px]">
                  {/* Background shapes */}
                  <div className="absolute top-0 left-0 w-[90%] h-[90%] bg-gray-800 rounded-[40px] -z-10"></div>
                  <div className="absolute top-6 left-6 w-[95%] h-[95%] bg-[#d7e8da] rounded-[40px] -z-20"></div>

                  <Image
                    src={`https://wiseway.wmsapphub.com/${item.image1}`}
                    alt="Universities"
                    layout="fill"
                    objectFit="cover"
                    className="shadow-2xl rounded-lg"
                  />
                </div>
              )}
            </div>

            {/* Text Content */}
            <div className="md:w-[50%] text-center md:text-left p-4 md:p-10">
              <h2 className="text-3xl md:text-5xl text-black">Study in best</h2>
              <h1 className="text-green-700 text-5xl md:text-7xl font-extrabold">
                Universities
              </h1>
              <p className="text-black text-xl md:text-2xl mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum
              </p>

              {/* Checklist Section */}
              <ul className="mt-6 text-lg md:text-xl text-black space-y-3">
                <li className="flex items-center">
                  <span className="text-xl mr-2">
                    <Image
                      src="/images/tick.svg"
                      alt="Uploaded Icon"
                      width={24}
                      height={24}
                    />
                  </span>{" "}
                  Study at prestigious universities with high academic
                  standards.
                </li>
                <li className="flex items-center">
                  <span className="text-xl mr-2">
                    <Image
                      src="/images/tick.svg"
                      alt="Uploaded Icon"
                      width={24}
                      height={24}
                    />
                  </span>{" "}
                  Experience a variety of cultures and languages.
                </li>
                <li className="flex items-center">
                  <span className="text-xl mr-2">
                    <Image
                      src="/images/tick.svg"
                      alt="Uploaded Icon"
                      width={24}
                      height={24}
                    />
                  </span>{" "}
                  Benefit from lower tuition costs and living expenses.
                </li>
                <li className="flex items-center">
                  <span className="text-xl mr-2">
                    <Image
                      src="/images/tick.svg"
                      alt="Uploaded Icon"
                      width={24}
                      height={24}
                    />
                  </span>{" "}
                  Easily explore multiple countries within Europe.
                </li>
                <li className="flex items-center">
                  <span className="text-xl mr-2">
                    <Image
                      src="/images/tick.svg"
                      alt="Uploaded Icon"
                      width={24}
                      height={24}
                    />
                  </span>{" "}
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