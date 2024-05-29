import React from "react";
import { CiMusicNote1 } from "react-icons/ci";
import { MdOutlineSportsCricket } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { MdMovieEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="p-5 pl-14 shadow-lg w-1/6">
      <motion.aside>
        <h1 className="font-bold text-xl my-3">subscriptions</h1>
        <ul className="text-lg pl-5">
          <li>Home</li>
          <li>Shorts</li>
          <li>subscriptions</li>
        </ul>
        <h1 className="font-bold text-xl my-3">subscriptions</h1>
        <ul className="text-lg">
          <li className="flex">
            <CiMusicNote1 size={25} className="mx-2 my-1" />
            Music
          </li>
          <li className="flex">
            <MdOutlineSportsCricket size={25} className="mx-2 my-1" />
            Sports
          </li>
          <li className="flex">
            <FaGamepad size={25} className="mx-2 my-1" />
            Gaming
          </li>
          <li className="flex">
            <MdMovieEdit size={25} className="mx-2 my-1" /> Movies
          </li>
        </ul>
      </motion.aside>
    </div>
  );
};

export default Sidebar;
