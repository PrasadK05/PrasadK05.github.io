import React from "react";
import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";

const skills = [
  {
    id: "1",
    image: "https://img.icons8.com/color/2x/html-5--v2.png",
    title: "HTML",
  },
  {
    id: "2",
    image: "https://img.icons8.com/fluency/2x/css3.png",
    title: "CSS",
  },
  {
    id: "3",
    image: "https://img.icons8.com/color/2x/javascript.png",
    title: "JavaScript",
  },
  {
    id: "4",
    image: "https://img.icons8.com/plasticine/2x/react.png",
    title: "ReactJS",
  },
  {
    id: "5",
    image: "https://img.icons8.com/color/2x/redux.png",
    title: "Redux",
  },
  {
    id: "6",
    image: "https://img.icons8.com/fluency/2x/node-js.png",
    title: "NodeJS",
  },
  {
    id: "7",
    image: "https://cdn.iconscout.com/icon/free/png-64/express-8-1175029.png",
    title: "ExpressJS",
  },
  {
    id: "8",
    image: "https://img.icons8.com/color/2x/mongodb.png",
    title: "Mongodb",
  },
  {
    id: "9",
    image: "https://img.icons8.com/fluency/2x/typescript.png",
    title: "TypeScript",
  },
  {
    id: "10",
    image: "https://img.icons8.com/color/2x/chakra-ui.png",
    title: "Chakra-UI",
  },
  {
    id: "11",
    image: "https://img.icons8.com/color/2x/bootstrap.png",
    title: "Bootstrap",
  },
  {
    id: "12",
    image: "https://img.icons8.com/color/2x/java-web-token.png",
    title: "JSON Web Token",
  },
  {
    id: "13",
    image:
      "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png",
    title: "NEXT.js",
  },
  {
    id: "14",
    image: "https://img.icons8.com/color/2x/visual-studio.png",
    title: "VS Code",
  },
  { id: "15", image: "https://img.icons8.com/color/2x/git.png", title: "git" },
];

export default function Skills() {
  return (
    <Box
      id="skills1"
      className="nav-link skills"
      width={{ base: "95%", sm: "95%", md: "90%", lg: "70%" }}
      margin="auto"
      mt={{ base: "20px", sm: "20px", md: "30px", lg: "100px" }}      
    >
      <Box
        mb={{ base: "15px", sm: "20px", md: "20x", lg: "25px" }}
        textAlign="center"
      >
        <Text
          fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
          as="b"
        >
          Skills
        </Text>
      </Box>
      <SimpleGrid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap="25px"
      >
        {skills.map((el) => {
          return (            
            <Box              
              textAlign={"center"}
              p={"5px"}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              borderRadius={"15px"}
              key={el.id}
              className="skills-card"
            >
              <Image src={el.image} w="100%" className="skills-card-img" />
              <Text as={"b"} className="skills-card-name">
                {el.title}
              </Text>
            </Box>
           
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
