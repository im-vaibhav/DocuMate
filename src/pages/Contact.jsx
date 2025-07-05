import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-[#707070]">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className=" font-semibold text-lg text-gray-600">OUR ADDRESS</p>
          <p className=" text-gray-700">
            A-143 Chander Vihar Street 7<br />
            New Delhi 110092
          </p>
          <p className=" text-gray-700">
            Tel: (91) 9654828546 <br /> Email: doucmate@gmail.com
          </p>
          <p className=" font-semibold text-lg text-gray-600">
            About Developer
          </p>
          <p className="  text-gray-700">
            Connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/vaibhav-raj-277bb7218/"
              target="_blank"
              className="text-blue-600 underline"
            >
              LinkedIn
            </a>{" "}
            or explore my work on{" "}
            <a
              href="https://github.com/im-vaibhav"
              target="_blank"
              className="text-blue-600 underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact
