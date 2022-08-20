import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";

interface Props {
  // ラベルの文字
  children?: React.ReactNode;
  // ラベルの場所
  labelPlacement?: "top" | "start" | "bottom" | "end";
}

export default function CheckBox({ children, labelPlacement }: Props) {
  // チェックされているかどうかのステート
  const [state, setState] = React.useState({
    checked: false,
  });
  // チェックボックスがクリックされたときの処理
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControlLabel
      labelPlacement={labelPlacement && labelPlacement}
      control={
        <Checkbox
          checked={state.checked}
          onChange={handleChange}
          name="checked"
          color="secondary"
        />
      }
      label={children}
    />
  );
}
