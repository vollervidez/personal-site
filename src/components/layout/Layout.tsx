import * as React from "react";
import {Container} from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode
};

const Layout = ({children}: Props) => {
  return(
    <Container>
      {children}
    </Container>
  );
}

export default Layout;
