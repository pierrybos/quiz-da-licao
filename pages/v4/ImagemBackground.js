import React, { useState } from "react";
import { useAppState } from "./stateService";

const ImageBackground = () => {
  const { dispatchUpdate } = useAppState();
  const [imageData, setImageData] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      console.log(reader.result);
      dispatchUpdate(
        { target: { value: reader.result } },
        "setBackgroundImage"
      );
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} accept="image/*" />
    </div>
  );
};

export default ImageBackground;
