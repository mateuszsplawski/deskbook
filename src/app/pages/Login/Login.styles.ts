import { Form } from "formik";
import { MEDIA_QUERIES } from "lib/ui-kit";
import styled from "styled-components";

export const StyledDeskImage = styled.img`
  display: none;

  ${MEDIA_QUERIES.tablet} {
    display: block;
    width: 50%;
    object-fit: scale-down;
  }
`;

export const StyledLoginForm = styled(Form)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  ${MEDIA_QUERIES.tablet} {
    width: 50%;
    display: flex;
    > * {
      max-width: 35rem;
    }
  }
`;
