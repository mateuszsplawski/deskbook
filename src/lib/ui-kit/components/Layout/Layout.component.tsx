import { ReactNode } from "react";

import { Logo } from "../Logo/Logo.component";
import { Navigation } from "./components/Navigation/Navigation.component";
import { Seo, SeoMetadata } from "lib/shared";
import {
  StyledFooter as Footer,
  StyledLayoutWrapper as Wrapper,
  StyledMain as Main,
} from "./Layout.styles";

interface LayoutProps extends SeoMetadata {
  children: ReactNode;
}

export const Layout = ({
  children,
  metaDescription,
  metaTitle,
  metaRobots,
}: LayoutProps) => {
  return (
    <>
      <Seo
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        metaRobots={metaRobots}
      />
      <Wrapper>
        <Navigation leftSide={<Logo />} center={<p>Center</p>} />
        <Main>{children}</Main>
        <Footer>Footer</Footer>
      </Wrapper>
    </>
  );
};
