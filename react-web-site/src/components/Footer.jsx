import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-200">
      <div>
        <h1 className="w-full text-3xl font-semibold text-[#00df9a] ">
          REACT.
        </h1>
        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsum facilis quis quas modi deleniti veniam consequatur consequuntur impedit sint.</p>
        <div className="flex justify-between md:w-[75%] my-6 ">
            <FaFacebookSquare className="cursor-pointer hover:translate-y-[-10px] hover:text-[#00df9a] duration-300" size={30}/>
            <FaInstagram className="cursor-pointer hover:translate-y-[-10px] hover:text-[#00df9a] duration-300" size={30}/>
            <FaTwitterSquare className="cursor-pointer hover:translate-y-[-10px] hover:text-[#00df9a] duration-300" size={30}/>
            <FaGithubSquare className="cursor-pointer hover:translate-y-[-10px] hover:text-[#00df9a] duration-300" size={30}/>
            <FaDribbbleSquare className="cursor-pointer hover:translate-y-[-10px] hover:text-[#00df9a] duration-300" size={30}/>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
            <h6 className="text-gray-400 font-semibold">Solutions</h6>
            <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Marketing</li>
                <li className="py-2 text-sm">Commerce</li>
                <li className="py-2 text-sm">Insights</li>
            </ul>
        </div>
        <div>
            <h6 className="text-gray-400 font-semibold">Support</h6>
            <ul>
                <li className="py-2 text-sm">Pricing</li>
                <li className="py-2 text-sm">Documentation</li>
                <li className="py-2 text-sm">Guieds</li>
                <li className="py-2 text-sm">API Status</li>
            </ul>
        </div>
        <div>
            <h6 className="text-gray-400 font-semibold">Company</h6>
            <ul>
                <li className="py-2 text-sm">About</li>
                <li className="py-2 text-sm">Blog</li>
                <li className="py-2 text-sm">Jobs</li>
                <li className="py-2 text-sm">Careers</li>
            </ul>
        </div>
        <div>
            <h6 className="text-gray-400 font-semibold">Legal</h6>
            <ul>
                <li className="py-2 text-sm">Claim</li>
                <li className="py-2 text-sm">Policy</li>
                <li className="py-2 text-sm">Terms</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;