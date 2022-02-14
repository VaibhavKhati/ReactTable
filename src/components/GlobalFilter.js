import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <span>
        Search:{" "}
        <input
          value={filter || ""}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </span>
    </div>
  );
};
