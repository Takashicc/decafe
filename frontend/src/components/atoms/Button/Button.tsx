import React from "react";
import { Button } from "@chakra-ui/react";

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

const AppButton: React.FC<ButtonProps> = ({
  text,
  size = "md",
  variant = "solid",
  leftIcon,
  rightIcon,
}) => {
  return (
    <Button
      size={size}
      variant={variant}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      {text}
    </Button>
  );
};

export default AppButton;
