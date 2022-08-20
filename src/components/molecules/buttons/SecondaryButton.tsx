import { Button } from "@material-ui/core";
import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: React.ReactEventHandler;
}

// 呼び出す側で大きさと文字と文字の色を指定する。
export default function SecondaryButton({ children, onClick }: Props) {
  return (
    <Button
      className="bg-gradient-to-r from-gray-400 to-gray-400"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
