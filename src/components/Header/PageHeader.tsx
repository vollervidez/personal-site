import * as React from "react";
import {
  Box,
  Container,
  Heading,
  Stack,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";

const PageHeader = () => {
  return(
    <Box as="section" bg="bg-surface" py={{ base: '16', md: '24' }}>
      <Container>
        <Stack spacing={{ base: '8', md: '10' }}>
          <Stack spacing={{ base: '4', md: '6' }}>
            <Stack spacing="3">
              <Heading
                size={useBreakpointValue({ base: 'md', md: 'lg' })}
                fontWeight="semibold"
              >
                Im Victor Ollervidez
              </Heading>
              <Text color="muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
                Im a full-stack software developer based out of the Denver CO area.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default PageHeader;
