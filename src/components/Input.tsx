import * as React from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  children: React.ReactNode;
  id: string;
  labelStyle: string;
}
export const Input: React.FC<InputProps> = ({
  children,
  id,
  labelStyle,
  ...inputProps
}) => {
  return (
    <>
      <input id={id} {...inputProps} />
      <label className={labelStyle} htmlFor={id}>
        {children}
      </label>
    </>
  );
};
