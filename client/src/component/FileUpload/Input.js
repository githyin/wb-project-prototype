// Input.js
import React from "react";

export function Input({ id, type, multiple }) {
  return (
    <input
      id={id}
      type={type}
      multiple={multiple}
      className="border rounded-lg p-2"
    />
  );
}
