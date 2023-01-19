import * as React from "react"
import type { HeadProps } from "gatsby"
import {Button, Text} from "@chakra-ui/react";
import Layout from "../components/layout/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Text fontSize="6xl" fontWeight="medium">Personal Page</Text>
      <Button colorScheme="brand">Go To Another Page</Button>
    </Layout>
  )
}

export default IndexPage

export function Head(props: HeadProps) {
  return (
    <title>Hello World</title>
  );
}
