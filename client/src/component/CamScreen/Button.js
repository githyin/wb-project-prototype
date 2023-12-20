// Button.js
import React from "react";

export function Button({ className, size, variant, children }) {
  // 여기에 버튼의 동작 로직을 추가할 수 있습니다.
  return (
    <button className={`your-button-styles ${className}`}>{children}</button>
  );
}
