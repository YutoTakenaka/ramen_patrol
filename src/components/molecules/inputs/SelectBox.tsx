import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
} from "@material-ui/core";
import React from "react";

interface Props {
  // オプションは呼び出す側でmap関数を使って指定する
  children: React.ReactNode;
  // 必要に応じて補助テキストを追加
  helperText?: string;
  // SelectBoxのplaceholderとなるテキスト
  title: string;
}

export default function SelectBox({ children, helperText, title }: Props) {
  const [item, setItem] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setItem(event.target.value as string);
  };
  return (
    <FormControl className="w-36">
      <InputLabel>{title}</InputLabel>
      <Select value={item} onChange={handleChange}>
        {children}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
