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
    let targetValue = event.target.value || event.target.dataset.name;
    if (targetValue !== undefined) {
      options
        .filter((option) => option.name === targetValue)[0]
        .fn({
          target: {
            value: newFormats.indexOf(targetValue) > -1,
          },
        });
      if (
        options.filter((option) => option.name === targetValue)[0].noChange ==
        undefined
      ) {
        setFormats(newFormats);
      }
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
          value={option.initialState}
          aria-label={option.label}
        >
          {option.icon || option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleButtonGroupWithOptions;
