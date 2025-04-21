import React, { useState } from "react";

const Form = ({ items, setItems }) => {
  const [numOfItems, setNumOfItems] = useState(1);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    setItems((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        description: inputValue,
        quantity: numOfItems,
        checked: false,
      },
    ]);
  };

  return (
    <div className="form">
      <p>What do you need for your trip ?</p>

      <select
        name="nums"
        id="nums"
        value={numOfItems}
        onChange={(e) => setNumOfItems(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="item..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default Form;
