import { ButtonGroup } from "@chakra-ui/react";
import { ReactNode } from "react";

import { StyledNavigationWrapper as Wrapper } from "./Navigation.styles";
import { Button } from "../../../Button/Button.component";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../../../../app";

interface NavigationProps {
  leftSide?: ReactNode;
  center?: ReactNode;
}

export const Navigation = ({ center, leftSide }: NavigationProps) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {leftSide}
      {center}
      <ButtonGroup>
        <Button onClick={() => navigate(AppRoutes.LOGIN)}>Login</Button>
        <Button onClick={() => navigate(AppRoutes.REGISTER)}>Register</Button>
      </ButtonGroup>
    </Wrapper>
  );
};
