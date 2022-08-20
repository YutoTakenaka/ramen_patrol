import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
} from "@material-ui/core";
import React from "react";

interface Props {
  // 必要に応じて補助テキストを追加
  helperText?: string;
  // SelectBoxのplaceholderとなるテキスト
  title: string;
  // SelectBoxのオプション
  options: Array<string>;
}

export default function SelectBox({ helperText, title, options }: Props) {
  // SelectBoxの処理
  const [item, setItem] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setItem(event.target.value as string);
  };
  const optionItems = options.map((option: string) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <FormControl className="w-36">
      <InputLabel>{title}</InputLabel>
      <Select onChange={handleChange}>{optionItems}</Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
