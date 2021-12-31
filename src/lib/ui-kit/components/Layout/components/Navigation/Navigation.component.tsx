import { ReactNode } from "react";
import { StyledNavigationWrapper as Wrapper } from "./Navigation.styles";

interface NavigationProps {
  leftSide?: ReactNode;
  center?: ReactNode;
  rightSide?: ReactNode;
}

export const Navigation = ({
  center,
  leftSide,
  rightSide,
}: NavigationProps) => {
  return (
    <Wrapper>
      {leftSide}
      {center}
      {rightSide}
    </Wrapper>
  );
};
