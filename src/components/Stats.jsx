import React, { useState } from "react";

const Stats = ({ items, packedItems }) => {
  return (
    <div className="stats">
      <p>
        You have {items.length} items on your list , and you already packed{" "}
        {packedItems} (
        {items.length > 0 ? (packedItems / items.length) * 100 : 0}%)
      </p>
    </div>
  );
};

export default Stats;
