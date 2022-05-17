import styles from "../styles/Home.module.css";
import React, { useContext, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    // new window.google.translate.TranslateElement(
    //   {
    //     pageLanguage: "ko",
    //     includedLanguages: "en,ko,ja,zh-CN,fr,es", // include this for selected languages
    //     // includedLanguages: "en,ko,ja,zh-CN,fr,es", // include this for selected languages
    //     layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    //   },
    //   "google_translate_element"
    // );
    ///////////////////////////
    // 아래쪽
    new google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,ko,ja,zh-CN,fr,es",
      },
      "google_translate_element"
    );
    /////////////////////////////////////////
    // 옆쪽
    // new google.translate.TranslateElement(
    //   {
    //     pageLanguage: "en",
    //     includedLanguages: "en,ko,ja,zh-CN,fr,es",
    //     layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
    //   },
    //   "google_translate_element"
    // );
    ////////////////////////////////
    // 없음
    // new google.translate.TranslateElement(
    //   {
    //     pageLanguage: "en",
    //     includedLanguages: "en,ko,ja,zh-CN,fr,es",
    //     layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    //   },
    //   "google_translate_element"
    // );
  };

  return (
    // <div className={styles.container}>
    <div>
      <div id="google_translate_element"> </div>
      <div>Luck favors the prepared</div>
    </div>
  );
}
