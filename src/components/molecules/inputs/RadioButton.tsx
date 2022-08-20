import { FormControlLabel, Radio } from "@material-ui/core";
import React from "react";

interface Props {
  children?: React.ReactNode;
  value: string;
}

export default function RadioButton({ children, value }: Props) {
  return (
    <FormControlLabel
      value={value}
      control={<Radio />}
      label={children && children}
    />
  );
}
