import { Button } from "@material-ui/core";
import React, { useMemo } from "react";

interface Props {
  children: React.ReactNode;
  onClick: React.ReactEventHandler;
  disabled?: boolean;
}

export default function PrimaryButton({ children, onClick, disabled }: Props) {
  const color = useMemo<string>(() => {
    switch (disabled) {
      case true:
        return "bg-gradient-to-r from-pink-200 to-yellow-200";
      case false:
        return "bg-gradient-to-r from-pink-500 to-yellow-500";
      default:
        return "bg-gradient-to-r from-pink-500 to-yellow-500";
    }
  }, [disabled]);

  return (
    <Button className={`${color}`} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}
