import React, { useState } from "react";
import "./Block.css";
export default function Block({ value, idx }) {
  return (
    <>
      <div className="block" key={idx} style={{ height: `${value}px` }}></div>
    </>
  );
}
