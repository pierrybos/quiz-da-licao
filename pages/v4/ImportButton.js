import React from "react";
import { useStore } from "react-redux";
import { loadState, saveState } from "./utils/localStorage"; // Funções para carregar e salvar o estado no localStorage
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ImportButton = () => {
  const store = useStore();

  const handleImport = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const importedState = JSON.parse(e.target.result);
      store.importState(importedState);

      // Salvar o estado importado no localStorage
      saveState(importedState);
    };
    reader.readAsText(file);
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Importar:
      <VisuallyHiddenInput
        type="file"
        type="file"
        accept=".json,.esjc"
        onChange={handleImport}
      />
    </Button>
  );
};

export default ImportButton;
