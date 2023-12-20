// Card.js
import React from "react";

export function Card({ className, children }) {
  return <div className={`your-card-styles ${className}`}>{children}</div>;
}

export function CardHeader({ className, children }) {
  return (
    <div className={`your-card-header-styles ${className}`}>{children}</div>
  );
}

export function CardContent({ className, children }) {
  return (
    <div className={`your-card-content-styles ${className}`}>{children}</div>
  );
}
