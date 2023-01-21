import * as React from "react"
import type {HeadProps} from "gatsby"
import Layout from "../components/layout/Layout";
import PageHeader from "../components/Header/PageHeader";

const IndexPage = () => {
  return (
    <Layout>
      <PageHeader />
    </Layout>
  )
}

export default IndexPage

export function Head(props: HeadProps) {
  return (
    <title>Hello World</title>
  );
}
