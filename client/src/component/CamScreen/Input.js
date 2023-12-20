// Input.js
import React from "react";

export function Input({ className, id, placeholder }) {
  return (
    <input
      className={`your-input-styles ${className}`}
      id={id}
      placeholder={placeholder}
    />
  );
}
