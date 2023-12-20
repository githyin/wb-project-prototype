// Avatar.js
import React from "react";

export function Avatar({ className, children }) {
  return <div className={`your-avatar-styles ${className}`}>{children}</div>;
}

export function AvatarImage({ alt, src }) {
  return <img alt={alt} src={src} />;
}

export function AvatarFallback({ children }) {
  return <div className="your-avatar-fallback-styles">{children}</div>;
}
