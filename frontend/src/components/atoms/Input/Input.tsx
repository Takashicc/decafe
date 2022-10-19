import React, { memo, HTMLInputTypeAttribute } from "react";
import { Input as ChakraInput } from "@chakra-ui/react";

interface InputProps {
  type: HTMLInputTypeAttribute;
  placeHolder: string;
  variant?: "outline" | "filled" | "flushed" | "unstyled";
}

export const Input: React.FC<InputProps> = memo(
  ({ type, placeHolder, variant = "filled" }) => {
    return (
      <ChakraInput type={type} placeholder={placeHolder} variant={variant} />
    );
  }
);
