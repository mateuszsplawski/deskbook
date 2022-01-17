import { useIntl } from "react-intl";

export const useTranslations = () => {
  const { formatMessage } = useIntl();
  return (id: string) => formatMessage({ id });
};
