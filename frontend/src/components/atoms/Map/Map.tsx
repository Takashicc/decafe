import React, { memo } from "react";
import { Box } from "@chakra-ui/react";

interface MapProps {
  latitude: number;
  longitude: number;
  address: string;
}

export const Map: React.FC<MapProps> = memo(
  ({ latitude, longitude, address }) => {
    return (
      <Box
        maxW="sm"
        borderColor="blackAlpha.300"
        borderWidth="1px"
        borderRadius="lg"
        overflow={"hidden"}
      >
        <iframe
          title="Shop location"
          src={`https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed`}
          width="100%"
          height="auto"
          loading="lazy"
        ></iframe>
        <Box mt="3" mb="3" ml="2">
          <Box fontWeight="semibold">{address}</Box>
        </Box>
      </Box>
    );
  }
);
