import * as React from "react";
import { Flex } from "@chakra-ui/react";
import NavBar from "../Navigation/NavBar";
import Footer from "../Footer/Footer";

type Props = {
  children?: React.ReactNode
};

const Layout = ({ children }: Props) => {
  return(
    <Flex direction="column" flex="1">
      <NavBar />
      {children}
      <Footer />
    </Flex>
  );
}

export default Layout;
