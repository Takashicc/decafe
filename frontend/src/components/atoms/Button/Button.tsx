import React, { memo } from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  text: string;
  type?: "submit" | "button";
  size?: "sm" | "md" | "lg" | "xs";
  variant?: "solid" | "ghost" | "outline" | "link";
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = memo(
  ({
    text,
    type = "submit",
    size = "md",
    variant = "solid",
    leftIcon,
    rightIcon,
    isLoading = false,
    ...props
  }) => {
    return (
      <ChakraButton
        type={type}
        size={size}
        variant={variant}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        isLoading={isLoading}
        {...props}
      >
        {text}
      </ChakraButton>
    );
  }
);
