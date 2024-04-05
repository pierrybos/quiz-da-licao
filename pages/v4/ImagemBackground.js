import React, { useState } from "react";
import { useAppState } from "./stateService";
import { useSelector } from "react-redux";

const ImageBackground = () => {
  const source = useSelector((state) => state.stylization.backgroundImage);
  const { dispatchUpdate } = useAppState();
  const [imageData, setImageData] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 1920;
        const MAX_HEIGHT = 1080; // Adicione a altura máxima aqui se desejar

        let width = img.width;
        let height = img.height;

        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }

        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // Converta o canvas para base64 com qualidade ajustada
        const newDataUrl = canvas.toDataURL("image/jpeg", 0.7); // Ajuste a qualidade conforme necessário

        dispatchUpdate({ target: { value: newDataUrl } }, "setBackgroundImage");
      };
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <img
        src={source}
        alt="miniatura"
        height="150"
        width="auto"
        style={{ display: "block" }}
      />
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        style={{ display: "block" }}
      />
    </div>
  );
};

export default ImageBackground;
