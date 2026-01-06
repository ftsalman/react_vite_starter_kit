import { useTranslation } from "react-i18next";

export const useI18Next = () => {
  const { t, i18n } = useTranslation();

  const isRtl = ["ar", "he", "fa"].includes(i18n.language);

  return { t, isRtl, i18n };
};