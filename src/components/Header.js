import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addToCache } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
        console.log("API call-" + searchQuery);
      }
    }, 200);

    return () => {
      //is called when a component is unmounted/destroyed when rendering new version of the component
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      addToCache({
        [searchQuery]: json[1],
      })
    );
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
      <div className="col-span-10 px-10 relative ">
        <div>
          <input
            type="text"
            className="border border-black w-1/2 rounded-l-full p-2 px-5"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            type="submit"
            className="rounded-r-full border border-black p-2 bg-gray-200 "
          >
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[37rem] rounded-lg border border-gray shadow-lg">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className=" col-span-1">
        <FaUserCircle size={25} />
      </div>
    </div>
  );
};

export default Header;
