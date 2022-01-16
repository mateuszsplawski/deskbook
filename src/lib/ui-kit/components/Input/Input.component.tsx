import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  error?: string;
  label: string;
}

export const Input = ({ error, name, label, ...props }: InputProps) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <ChakraInput id={name} name={name} variant="outline" {...props} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
