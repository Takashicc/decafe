import React from "react";
import { Flex } from "@chakra-ui/react";
import { LoginArea } from "@/components/organisms/LoginArea";

export const LoginTemplate: React.FC = () => {
  return (
    <Flex h="95vh" direction="column" align="center" justify="center">
      <LoginArea />
    </Flex>
  );
};
