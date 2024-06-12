import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [sendMessage, setSendMessage] = useState();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const t = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(30),
        })
      );
    }, 1500);

    return () => clearInterval(t);
  }, []);
  return (
    <>
      <div className="p-2 ml-2  h-[600px] border border-black rounded-t-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((message, index) => (
          <ChatMessage
            key={index}
            name={message.name}
            comment={message.message}
          />
        ))}
      </div>
      <form
        className="w-full border border-black rounded-b-lg  p-3 ml-1"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "viraj",
              message: sendMessage,
            })
          );
          setSendMessage("");
        }}
      >
        <input
          type="text"
          placeholder="chat..."
          value={sendMessage}
          onChange={(e) => {
            setSendMessage(e.target.value);
          }}
          className="w-96 border border-black rounded-lg m-2 p-2"
        ></input>
        <button className="bg-green-200 p-3 mx-5 m-2 rounded-lg">send</button>
      </form>
    </>
  );
};
export default LiveChat;
