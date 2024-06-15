import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const ExportButton = () => {
  const state = useSelector((state) => state);

  const handleExport = () => {
    const stateJSON = JSON.stringify(state);
    const blob = new Blob([stateJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "backup.esjc";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Button
      component="label"
      role={undefined}
      onClick={handleExport}
      variant="colored"
      tabIndex={-1}
      startIcon={<CloudDownloadIcon />}
    >
      Exportar
    </Button>
  );
};

export default ExportButton;
