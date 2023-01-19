import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const NotFound = () => {
  return (
    <Box bgColor="white">
      <Heading fontSize="xl">404...</Heading>
      <Heading fontSize="6xl">Page Not Found</Heading>
    </Box>
  );
};

export default NotFound;
