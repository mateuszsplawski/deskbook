import { ReactNode } from "react";
import { Navigation } from "./components/Navigation/Navigation.component";
import {
  StyledFooter as Footer,
  StyledLayoutWrapper as Wrapper,
  StyledMain as Main,
} from "./Layout.styles";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Navigation
        leftSide={<p>Left</p>}
        center={<p>Center</p>}
        rightSide={<p>Right</p>}
      />
      <Main>{children}</Main>
      <Footer>Footer</Footer>
    </Wrapper>
  );
};
