import React from "react";
import Button from "./Button";
const ButtonName = [
  "All",
  "Cooking",
  "Sports",
  "News",
  "Movies",
  "Games",
  "live",
  "soccer",
  "cricket",
  "F1",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {ButtonName.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
