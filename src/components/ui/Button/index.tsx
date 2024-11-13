import React from "react";

interface Props {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
}

const OctButton = ({ children, type }: Props) => {
  return <button type={type}>{children}</button>;
};

export default OctButton;
