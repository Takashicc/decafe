import React from "react";
import { Flex } from "@chakra-ui/react";
import { SignUpArea } from "@/components/organisms/SignUpArea";

export const SignUpTemplate: React.FC = () => {
  return (
    <Flex h="95vh" direction="column" align="center" justify="center">
      <SignUpArea />
    </Flex>
  );
};
