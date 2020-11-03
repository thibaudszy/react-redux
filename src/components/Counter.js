import React from "react";
import "./Counter.css";

export default function Counter({ dataSource, tag }) {
  const count = dataSource.length;
  return (
    <div className="counter">
      <h1>{count}</h1>
      <p>{tag}</p>
    </div>
  );
}
