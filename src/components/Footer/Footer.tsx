import * as React from "react";
import {ButtonGroup, Container, IconButton, Stack, Text} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Container as="footer" role="contentinfo" py={{base: '12', md: '16'}}>
      <Stack spacing={{base: '4', md: '5'}}>
        <Stack justify="space-between" direction="row" align="center">
          {/*<Logo />*/}
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem"/>}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem"/>}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Building Cool Stuff!
        </Text>
      </Stack>
    </Container>
  );
}

export default Footer;
