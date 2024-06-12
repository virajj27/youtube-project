import React from "react";
import { FaUserCircle } from "react-icons/fa";
const ChatMessage = ({ name, comment }) => {
  return (
    <div className="flex items-center text-xl py-3 shadow-sm">
      <FaUserCircle size={35} />
      <span className="font-bold px-3">{name}</span>
      <span>{comment}</span>
    </div>
  );
};

export default ChatMessage;
