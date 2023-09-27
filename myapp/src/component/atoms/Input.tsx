import React from "react";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = ({ value, onChange }) => {
  return <input value={value} onChange={onChange} />;
};
