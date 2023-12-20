// Card.js
import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`bg-white shadow-md rounded-lg px-8 py-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }) {
  return <div className={`pb-4 ${className}`}>{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}

export function CardTitle({ children }) {
  return (
    <h2 className="text-2xl font-semibold text-center mb-4">{children}</h2>
  );
}
