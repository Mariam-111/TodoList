import React, { useState } from "react";

const PackingList = ({ items, setItems }) => {
  const handleToggleChecked = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="packingList">
      <div className="listElement">
        {" "}
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                onClick={() => handleToggleChecked(item.id)}
              />
              <span>{item.quantity}</span>
              <span
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.checked} {item.description} {item.checked ? "✅" : "❌"}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="listFooter">
        <select name="itemSel" id="itemSel">
          <option value="sortinput"> Sort By Input Order </option>
          <option value="description"> Sort By Description </option>
          <option value="toggle"> Sort By Toggle </option>
        </select>
        <button onClick={() => setItems([])}>Clear</button>
      </div>
    </div>
  );
};

export default PackingList;
