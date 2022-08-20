import { Button } from "@material-ui/core";
import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: React.ReactEventHandler;
}
export default function PrimaryButton({ children, onClick }: Props) {
  return (
    <div>
      <Button
        className="h-14 w-32 text-sm  bg-gradient-to-t from-cyan-500 to-blue-500 text-white rounded-xl"
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
}
