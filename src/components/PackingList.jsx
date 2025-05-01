import React, { useState } from "react";

const PackingList = ({ items, setItems }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));

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
          {sortedItems.map((item) => (
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
        <select
          name="itemSel"
          id="itemSel"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input"> Sort By Input Order </option>
          <option value="description"> Sort By Description </option>
          <option value="packed"> Sort By packed status </option>
        </select>
        <button onClick={() => setItems([])}>Clear</button>
      </div>
    </div>
  );
};

export default PackingList;
