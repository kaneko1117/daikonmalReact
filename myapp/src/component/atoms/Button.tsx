import React from "react";
import { ReactNode } from "react";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

export const Button: React.FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
