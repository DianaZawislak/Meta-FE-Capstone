import React from "react";
import { Box, Image, Link, Stack, Flex } from "@chakra-ui/react";



const Nav = () => {
  const logoLink = require("../static/lllogo.png");
  return (
    <Flex as="header" align="center" justify="center">
      <Box as="nav" width="100%">
        <Stack w="100%" align="center" justify="center">
          <Image src={logoLink} alt="Logo" h="auto" mb="20px" />
          <Stack
            h="50px"
            w="100%"
            bg="#495e57"
            direction="row"
            align="center"
            justify="center"
            spacing={40}
          >
            <Link
              style={{ textDecoration: "none" }}
              href="/"
              to="/"
              fontWeight="bold"
              fontSize="20"
              color="white"
            >
              Home
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href="/about"
              fontWeight="bold"
              fontSize="20"
              color="white"
            >
              About
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href="/menu"
              fontWeight="bold"
              fontSize="20"
              color="white"
            >
              Menu
            </Link>
            <Link
              textDecoration="none"
              href="/book"
              fontWeight="bold"
              fontSize="20"
              color="white"
            >
              Book
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Nav;