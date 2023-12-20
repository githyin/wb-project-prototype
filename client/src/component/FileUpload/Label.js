// Label.js
import React from "react";

export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="font-medium text-gray-700">
      {children}
    </label>
  );
}
