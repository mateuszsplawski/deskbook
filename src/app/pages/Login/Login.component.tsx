import { LoginForm } from "./Login.form";
import { StyledDeskImage as DeskImage } from "./Login.styles";
import { deskImageSrc } from "assets";
import { useTranslations } from "lib/translations";
import { Layout, Section } from "lib/ui-kit";

export const Login = () => {
  const t = useTranslations();
  return (
    <Layout hasFooter={false}>
      <Section shouldNotScroll>
        <DeskImage alt={t("loginPage.deskImageAlt")} src={deskImageSrc} />
        <LoginForm />
      </Section>
    </Layout>
  );
};
