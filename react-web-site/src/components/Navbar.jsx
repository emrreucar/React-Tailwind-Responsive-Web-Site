import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true); // ilk hali false

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Company",
    },
    {
      id: 3,
      link: "Resources",
    },
    {
      id: 4,
      link: "About",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-semibold text-[#00df9a] ">REACT.</h1>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="p-4">
            {link}
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineClose className="cursor-pointer" size={30} />
        ) : (
          <AiOutlineMenu className="cursor-pointer" size={30} />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 "
            : "fixed left-[-100%] duration-500"
        }
      >
        <h1 className="w-full text-3xl font-semibold text-[#00df9a] m-4 ">
          REACT.
        </h1>
        <ul className="pt-12 uppercase p-4">
          {links.map(({ id, link }) => (
            <li className="p-4 border-b border-gray-600" key={id}>
              {" "}
              {link}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
