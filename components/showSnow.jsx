"use client";

import { Snowfall } from "react-snowfall";

export default function SnowFallDecember() {
  const isDecember = new Date().getMonth() === 11;

  if (!isDecember) return null;

  return (
    <Snowfall
      color="#fff"
      snowflakeCount={100}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
