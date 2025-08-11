// import React from 'react'
import { useState } from 'react';
import { assets } from '../assets/assets'
import ChatButton from './ChatBoX/ChatButton'

const Header = () => {
  
  return (
    <div >
      <div className=" flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-15 lg:my-10 gap-y-10 ">
        {/* --------- Header Left --------- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[3vw] md:mb-[-30px]">
          <p className="text-5xl md:text-4xl lg:text-5xl text-gray-800 font-semibold leading-tight md:leading-snug lg:leading-[1.25]">
            Book Appointment
            <br /> With Trusted Doctors
          </p>
          <div className="text-[18px] mt-3 mb-5 text-gray-700 leading-[1.7]">
            <p className="w-[90%]">
              The smarter, all-year doctor booking platform that puts your
              health first. Designed around your needs, trusted by thousands,
              and built for hassle-free care
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 text-gray-800 text-[16px] font-light font-semibold max-md:m-auto ">
            <img className="w-28" src={assets.group_profiles} alt="" />
            <p>50+ experienced doctors on board!</p>
          </div>
          <a
            href="#speciality"
            className="flex items-center gap-2 bg-primary px-8 py-3 rounded-full text-white text-[20px] m-auto md:m-0 md:my-5 hover:scale-105 transition-all duration-300 mt-8 font-medium"
          >
            Reserve Your Slot &nbsp; &rarr;{" "}
          </a>
        </div>

        {/* --------- Header Right --------- */}
        <div className="md:w-1/2 relative flex items-start justify-center">
          <img
            className="w-[90%] max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] h-auto object-contain"
            src={assets.header_img}
            alt="Hero doctor"
          />
        </div>
      </div>
      <ChatButton />
    </div>
  );
};

export default Header