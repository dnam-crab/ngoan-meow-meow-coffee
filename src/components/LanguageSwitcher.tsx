import { useTranslation } from "react-i18next";
import { LANGUAGES, type AppLanguage } from "../constants";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lang: AppLanguage) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("meow.lang", lang);
  };

  // return (
  //   <Group gap="xs">
  //     <Button
  //       size="xs"
  //       variant={i18n.language === LANGUAGES.vi ? "filled" : "outline"}
  //       onClick={() => changeLang("vi")}
  //     >
  //       VI
  //     </Button>

  //     <Button
  //       size="xs"
  //       variant={i18n.language === LANGUAGES.en ? "filled" : "outline"}
  //       onClick={() => changeLang("en")}
  //     >
  //       EN
  //     </Button>
  //   </Group>
  // );
  return null;
}
