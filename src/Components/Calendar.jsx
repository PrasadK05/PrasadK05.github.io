import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { Box, Text } from "@chakra-ui/react";

export default function Calendar() {
  return (
    <Box
      width={{ base: "100%", sm: "100%", md: "90%", lg: "70%" }}
      margin="auto"
      mt={{ base: "10px", sm: "20px", md: "30px", lg: "100px" }}
      border={"1px solid red"}
    >
        <Box mb={{ base: "15px", sm: "20px", md: "20x", lg: "25px" }} textAlign="center">
            <Text
            fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
            as="b"
            >Github Calendar</Text>
        </Box>
      <Box w="100%">
        <GitHubCalendar
          username="PrasadK05"
          blockSize={17}
          blockMargin={5}
          fontSize={14}
          w="100%"
        >
          <ReactTooltip delay={20} html />
        </GitHubCalendar>
      </Box>
    </Box>
  );
}
