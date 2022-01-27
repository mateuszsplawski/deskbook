import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ChakraButton width="100%" variant="solid" {...props}>
      {children}
    </ChakraButton>
  );
};
