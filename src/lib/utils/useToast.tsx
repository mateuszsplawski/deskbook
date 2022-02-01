import { useToast as useChakraToast, UseToastOptions } from "@chakra-ui/react";

import { useTranslations } from "lib/translations";

const defaultVariant = "left-accent";
const defaultPosition = "top-right";

export const useToast = () => {
  const toast = useChakraToast();
  const t = useTranslations();

  const templateToast = (props: UseToastOptions) =>
    toast({ variant: defaultVariant, position: defaultPosition, ...props });

  return {
    successToast: (message: string, props?: UseToastOptions) =>
      templateToast({
        description: message,
        status: "success",
        title: t("toastMessages.successTitle"),
        ...props,
      }),
    infoToast: (message: string, props?: UseToastOptions) =>
      templateToast({
        description: message,
        status: "info",
        title: t("toastMessages.infoTitle"),
        ...props,
      }),
    errorToast: (message: string, props?: UseToastOptions) =>
      templateToast({
        description: message,
        status: "error",
        title: t("toastMessages.errorTitle"),
        ...props,
      }),
    warningToast: (message: string, props?: UseToastOptions) =>
      templateToast({
        description: message,
        status: "warning",
        title: t("toastMessages.warningTitle"),
        ...props,
      }),
  };
};
