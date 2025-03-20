import React from "react";

export const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      {/* Heading section */}
      <div className="relative text-center">
        <span className="-top-4 left-1/2 -translate-x-1/2 bg-[#A8DADC] text-black font-bold py-3 px-5 text-lg rounded-tl-3xl rounded-br-3xl">
          CONTACT WITH US
        </span>
        <h2 className="text-7xl md:text-7xl sm:text-4xl font-bold text-black mt-4">
          Write a Message
        </h2>
      </div>

      {/* Form Section */}
      <form className="mt-8 w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="First Name"
            className="p-6 bg-[#A8DADC] rounded-tl-3xl text-black placeholder-black rounded-br-3xl outline-none w-full text-lg"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-6 bg-[#A8DADC] rounded-tl-3xl text-black placeholder-black rounded-br-3xl outline-none w-full text-lg"
          />
          <input
            type="email"
            placeholder="Email address"
            className="p-6 bg-[#A8DADC] rounded-tl-3xl text-black placeholder-black rounded-br-3xl outline-none w-full text-lg"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-6 bg-[#A8DADC] rounded-tl-3xl text-black placeholder-black rounded-br-3xl outline-none w-full text-lg"
          />
        </div>

        <textarea
          placeholder="Write a message"
          className="w-full h-32 mt-4 p-6 bg-[#A8DADC] rounded-tl-3xl text-black placeholder-black rounded-br-3xl text-lg outline-none resize-none"
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-[#15253b] text-white font-semibold px-14 py-6 rounded-tl-3xl rounded-br-3xl hover:bg-[#484e56] transition">
            SEND A MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};
