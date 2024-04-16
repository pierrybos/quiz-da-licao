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

  const handleClick = (option) => {
    option.fn({ target: { value: !formats.includes(option.name) } });
    if (!option.noChange) {
      if (formats.includes(option.name)) {
        setFormats(formats.filter((format) => format !== option.name));
      } else {
        setFormats([...formats, option.name]);
      }
    }
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
          variant={formats.includes(option.name) ? "contained" : "outlined"}
          onClick={() => handleClick(option)}
          aria-label={option.label}
        >
          {option.icon}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ButtonGroupWithOptions;
