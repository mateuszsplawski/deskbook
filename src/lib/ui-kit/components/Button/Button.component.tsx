import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ChakraButton variant="solid" {...props}>
      {children}
    </ChakraButton>
  );
};
