import React, { memo, HTMLInputTypeAttribute } from "react";
import { Input } from "@chakra-ui/react";

interface InputProps {
  type: HTMLInputTypeAttribute;
  placeHolder: string;
  variant?: "outline" | "filled" | "flushed" | "unstyled";
}

const AppInput: React.FC<InputProps> = memo(
  ({ type, placeHolder, variant = "filled" }) => {
    return <Input type={type} placeholder={placeHolder} variant={variant} />;
  }
);

export default AppInput;
