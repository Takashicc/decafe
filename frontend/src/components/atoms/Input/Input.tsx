import React, { memo, HTMLInputTypeAttribute } from "react";
import { Box, FormLabel } from "@chakra-ui/react";
import { Input as ChakraInput } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  type: HTMLInputTypeAttribute;
  id: string;
  label: string;
  placeHolder: string;
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  register?: UseFormRegisterReturn<any>;
}

export const Input: React.FC<InputProps> = memo(
  ({
    type,
    placeHolder,
    id,
    label,
    variant = "filled",
    register,
    ...props
  }) => {
    return (
      <Box p={1}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <ChakraInput
          id={id}
          type={type}
          placeholder={placeHolder}
          variant={variant}
          {...register}
          {...props}
        />
      </Box>
    );
  }
);
