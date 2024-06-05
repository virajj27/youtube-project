import React from "react";
import { FaUserCircle } from "react-icons/fa";
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
const Comment = ({ data }) => {
  const { name, message } = data;
  return (
    <div className="py-1">
      <div className="flex p-3 bg-gray-200 rounded-xl">
        <FaUserCircle size={35} />
        <div className=" pl-5  w-full">
          <p className="font-bold">{name}</p>
          <p className="">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
