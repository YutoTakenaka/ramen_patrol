import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ComponentBox({ children }: Props) {
  return (
    <div className="m-4 p-4 w-fit h-fit border-4 rounded-lg border-gray-400 flex-col justify-around items-center p-4">
      {children}
    </div>
  );
}
