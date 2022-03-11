import React from "react";
interface LabelProps extends React.HTMLProps<HTMLLabelElement> {
  children: React.ReactNode;
}
export const Label: React.FC<LabelProps> = ({ children, ...labelProps }) => {
  return <label {...labelProps}>{children}</label>;
};
