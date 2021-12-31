import { ReactNode } from "react";
import {
  StyledFooter as Footer,
  StyledLayoutWrapper as Wrapper,
  StyledMain as Main,
  StyledNavigation as Navigation,
} from "./Layout.styles";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Navigation>Navbar</Navigation>
      <Main>{children}</Main>
      <Footer>Footer</Footer>
    </Wrapper>
  );
};
