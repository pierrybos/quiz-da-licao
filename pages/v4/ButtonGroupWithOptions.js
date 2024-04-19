import { useState, useEffect } from "react";
import { ButtonGroup, Button } from "@mui/material";
import { useAppState } from "./stateService";
import { Edit } from "@mui/icons-material";

const ButtonGroupWithOptions = ({ options, modal }) => {
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

  const handleClick = (ev, option) => {
    option.fn();
  };

  return (
    <ButtonGroup>
      {modal && (
        <Button onClick={modal}>
          <Edit />
        </Button>
      )}
      {options.map((option) => (
        <Button
          key={option.name}
          variant={option.initialState ? "contained" : "outlined"}
          onClick={(ev) => handleClick(ev, option)}
          aria-label={option.label}
          value={option.initialState}
        >
          {option.icon || option.label}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ButtonGroupWithOptions;
