import React from "react";

export const Ornament = ({ className = "", color = "#C9A646" }) => (
  <svg
    className={className}
    viewBox="0 0 240 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M0 15 H80"
      stroke={color}
      strokeWidth="0.8"
      strokeLinecap="round"
    />
    <path
      d="M160 15 H240"
      stroke={color}
      strokeWidth="0.8"
      strokeLinecap="round"
    />
    <path
      d="M120 4 L130 12 L120 20 L110 12 Z"
      stroke={color}
      strokeWidth="1"
      fill="none"
    />
    <circle cx="120" cy="12" r="2.5" fill={color} />
    <circle cx="100" cy="15" r="1.6" fill={color} />
    <circle cx="140" cy="15" r="1.6" fill={color} />
    <circle cx="92" cy="15" r="1" fill={color} />
    <circle cx="148" cy="15" r="1" fill={color} />
    <path d="M120 23 L120 30" stroke={color} strokeWidth="0.8" />
  </svg>
);

export const Mandala = ({ className = "", color = "#C9A646" }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g stroke={color} strokeWidth="0.6" fill="none" opacity="0.7">
      <circle cx="100" cy="100" r="20" />
      <circle cx="100" cy="100" r="40" />
      <circle cx="100" cy="100" r="60" />
      <circle cx="100" cy="100" r="80" />
      <circle cx="100" cy="100" r="95" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        const x1 = 100 + 20 * Math.cos(a);
        const y1 = 100 + 20 * Math.sin(a);
        const x2 = 100 + 95 * Math.cos(a);
        const y2 = 100 + 95 * Math.sin(a);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * 15 * Math.PI) / 180;
        const x = 100 + 70 * Math.cos(a);
        const y = 100 + 70 * Math.sin(a);
        return <circle key={i} cx={x} cy={y} r="2" fill={color} />;
      })}
    </g>
  </svg>
);

export const PaisleyCorner = ({ className = "", color = "#C9A646" }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 95 C 5 50, 50 5, 95 5 M 20 95 C 20 60, 60 20, 95 20 M 35 95 C 35 70, 70 35, 95 35"
      stroke={color}
      strokeWidth="0.8"
      fill="none"
      opacity="0.6"
    />
    <circle cx="20" cy="80" r="2" fill={color} />
    <circle cx="35" cy="65" r="1.5" fill={color} />
    <circle cx="50" cy="50" r="2.5" fill={color} />
    <circle cx="65" cy="35" r="1.5" fill={color} />
    <circle cx="80" cy="20" r="2" fill={color} />
  </svg>
);
