import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import {Button, Container, Text} from "@chakra-ui/react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Container>
      <Text fontSize="large" fontWeight="medium">Personal Page</Text>
      <Button colorScheme="brand">Go To Another Page</Button>
    </Container>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
