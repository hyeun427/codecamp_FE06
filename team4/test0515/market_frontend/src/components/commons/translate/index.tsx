import styled from "@emotion/styled";
import { I18nPage, useTranslation } from "../../../i18n/i18n";

const Btn = styled.button``;

const TranslateBtn: I18nPage = () => {
  const { t, i18n } = useTranslation();

  const onClickTranslate = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ko" : "en");
  };

  return <Btn onClick={onClickTranslate}>번역하기</Btn>;
};

export default TranslateBtn;
