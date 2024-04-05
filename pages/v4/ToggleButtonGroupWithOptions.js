import { useState, useEffect } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useAppState } from "./stateService";

const ToggleButtonGroupWithOptions = ({ options }) => {
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado
  const [formats, setFormats] = useState(() => {
    const initialFormats = [];
    options.forEach((option) => {
      if (option.initialState) initialFormats.push(option.name);
    });
    return initialFormats;
  });

  useEffect(() => {
    setFormats(() => {
      const initialFormats = [];
      options.forEach((option) => {
        if (option.initialState) initialFormats.push(option.name);
      });
      return initialFormats;
    });
  }, [options]);

  const handleFormat = (event, newFormats) => {
    if (newFormats) {
      newFormats.forEach((format) => {
        const option = options.find((opt) => opt.name === format);
        if (option) {
          option.fn({ target: { value: true } });
          console.log(option.fn);
        }
      });
      setFormats(newFormats);
    }
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      {options.map((option) => (
        <ToggleButton
          key={option.name}
          value={option.name}
          aria-label={option.label}
        >
          {option.icon}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleButtonGroupWithOptions;
