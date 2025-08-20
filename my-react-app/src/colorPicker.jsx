import React, { useState } from "react";

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const changeBackground = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
      id="color-picker-container"
      style={{ backgroundColor: color }}
    >
      <input
        id="color-input"
        type="color"
        value={color}
        onChange={changeBackground}
      />
    </div>
  );
};