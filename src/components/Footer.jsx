// import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.Documate} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            At DocuMate, we connect you with highly qualified and experienced
            doctors from various specialties. Our trusted network of medical
            professionals includes certified practitioners, specialists, and
            surgeons with years of expertise in providing top-notch healthcare.
            Whether you need a general consultation, a specialist advice, or
            ongoing care, Prescripto ensures you have access to the best medical
            services from the comfort of your home.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">PRODUCT</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="cursor-pointer"
            >
              {" "}
              About us
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="cursor-pointer"
            >
              Developer
            </li>
            <li
              onClick={() => {
                navigate("/about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="cursor-pointer"
            >
              Privacy policy
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 9654828546</li>
            <li>
              <a href="mailto:documate@gmail.com">
                documate@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ DocuMate.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer
