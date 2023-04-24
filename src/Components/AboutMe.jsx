import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function AboutMe() {
  return (
    <Box
      id="about1"
      className="nav-link about"
      width={{ base: "95%", sm: "95%", md: "90%", lg: "70%" }}
      margin="auto"
      mt={{ base: "30px", sm: "30px", md: "40px", lg: "100px" }}
      textAlign="center"      
    >
      <Box mb={{ base: "15px", sm: "20px", md: "20x", lg: "25px" }}>
        <Text
          fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
          as="b"
        >
          About
        </Text>
      </Box>
      <Text fontSize={{ base: "xl", sm: "xl", md: "xl", lg: "2xl" }}>
        Hi, I am Prasad Karde
      </Text>
      <Text
        fontSize={{ base: "sm", sm: "md", md: "md", lg: "xl" }}
        id="user-detail-intro"
      >
        Motivated and innovative aspiring full-stack web developer with hands-on
        experience in building websites with MERN stack and various web
        technologies including HTML, CSS, and JS. Curious to learn about
        emerging web technologies. Looking forward to making a significant
        contribution to an organization through dedicated effort.
        {/* A full Stack Web Developer With Peoblem Solveing mindset with various
        web technologies including HTML, CSS, JS and ReactJS. have a passion to
        create useful projects and systems which can contribute in everyone's
        wellbeing. I go to full extent in execution. */}
      </Text>
    </Box>
  );
}
