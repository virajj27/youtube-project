import React from "react";
import CommentList from "./CommentList";
import { COMMENT_DATA } from "../utils/constants";

const CommentContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl py-5 ">Comments</h1>
      <CommentList comments={COMMENT_DATA} />
    </div>
  );
};

export default CommentContainer;
