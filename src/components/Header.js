import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-md p-5 m-2">
      <div className="flex col-span-1">
        <RxHamburgerMenu
          size={30}
          className="cursor-pointer"
          onClick={handleMenu}
        />
        <a href="/">
          <img
            className="h-16 -mt-4"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="logo-img"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 ">
        <input
          type="text"
          className="border border-black w-1/2 rounded-l-full p-2"
        />
        <button
          type="submit"
          className="rounded-r-full border border-black p-2 bg-gray-200 "
        >
          🔍
        </button>
      </div>
      <div className=" col-span-1">
        <FaUserCircle size={25} />
      </div>
    </div>
  );
};

export default Header;
