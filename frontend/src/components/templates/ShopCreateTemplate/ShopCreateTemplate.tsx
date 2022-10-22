import React from "react";
import { Flex } from "@chakra-ui/react";
import { ShopArea } from "@/components/organisms/ShopArea";

export const ShopCreateTemplate: React.FC = () => {
  return (
    <Flex h="95vh" direction="column" justify="center" px="20%">
      <ShopArea />
    </Flex>
  );
};
