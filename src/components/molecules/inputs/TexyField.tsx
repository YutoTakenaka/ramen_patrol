import { TextField } from "@material-ui/core";

interface Props {
  label: string;
  required: boolean;
  disabled: boolean;
  type?: string;
}

export default function TextBox({ label, required, disabled, type }: Props) {
  return (
    <TextField
      label={label}
      type={type && type}
      required={required}
      disabled={disabled}
    />
  );
}
