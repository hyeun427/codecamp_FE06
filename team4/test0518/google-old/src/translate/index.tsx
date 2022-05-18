import React, { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: any;
  }
}

export default function Translate() {
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new google.translate.TranslateElement(
      {
        pageLanguage: "ko",
        autoDisplay: false,
        includedLanguages: "en,ko,ja,zh-CN,fr,es",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  return (
    <div>
      <div id="google_translate_element"> </div>
      {/* <div>Luck favors the prepared</div> */}
    </div>
  );
}
