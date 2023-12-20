// ChatMessage.js
import React from "react";
import UserIcon from "./UserIcon";

export default function ChatMessage({ isSentByUser, text }) {
  return (
    <div
      className={`flex items-center gap-2 ${isSentByUser ? "justify-end" : ""}`}
    >
      {isSentByUser ? null : <UserIcon className="w-6 h-6" />}
      <div
        className={`${
          isSentByUser ? "bg-blue-500 text-white" : "bg-[#f5f5f5]"
        } px-3 py-2 rounded-lg`}
      >
        <p className="text-sm">{text}</p>
      </div>
      {isSentByUser ? <UserIcon className="w-6 h-6" /> : null}
    </div>
  );
}
