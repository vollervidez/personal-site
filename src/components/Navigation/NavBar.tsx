import * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack, IconButton, Text,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/all";

const NavBar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  return (
    <Box as="section">
      <Box as="nav" bg="brand" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <Text fontSize="xl" color="white">Victor Ollervidez</Text>
            {isDesktop ? (
              <Flex justify="flex-end" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {['Resume', 'Email'].map((item) => (
                    <Button _hover={{color: "whiteAlpha.700"}} color="white" key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )}

export default NavBar;
