import { FormControlLabel, Switch } from "@material-ui/core";
import { useState } from "react";

interface Props {
  label?: string;
}

export default function SwitchButton({ label }: Props) {
  const [switchState, setSwitchState] = useState({
    checked: false,
  });

  const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchState({
      ...switchState,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <FormControlLabel
      control={
        <Switch
          checked={switchState.checked}
          onChange={handleChangeSwitch}
          name="checked"
        />
      }
      label={label}
    />
  );
}
