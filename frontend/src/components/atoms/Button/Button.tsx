import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

type Element = React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
>;

interface ButtonProps {
  text: string;
  size?: "sm" | "md" | "lg" | "xs";
  variant?: "solid" | "ghost" | "outline" | "link";
  leftIcon?: Element;
  rightIcon?: Element;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  size = "md",
  variant = "solid",
  leftIcon,
  rightIcon,
}) => {
  return (
    <ChakraButton
      size={size}
      variant={variant}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      {text}
    </ChakraButton>
  );
};
