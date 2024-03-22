import { useEffect, useState } from "react";
import { ChromePicker } from "react-color";

export default ({ label, fnOnColorChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState(false);

  function handleClick() {
    setDisplayColorPicker(!displayColorPicker);
  }

  function handleClose() {
    setDisplayColorPicker(false);
  }

  function handleChange(color) {
    setColor(color.rgb);
    fnOnColorChange(color.rgb);
  }

  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };

  const popover = {
    position: "absolute",
    zIndex: "2",
  };

  return (
    <div>
      <button onClick={handleClick}>{label || "Picker"}</button>
      {displayColorPicker ? (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};
