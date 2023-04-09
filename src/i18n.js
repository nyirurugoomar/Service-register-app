import i18n from "i18next";
import Backed from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


i18n.use(Backed).use(LanguageDetector).use(initReactI18next).init({
    Backed:{
        // translation file path
        loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en",
    debug:false,
    ns:["navbar","ourservice","footer","common"],

    interpolation:{
        espaceValue: false,
        formatSeparator:",",

    },
    react:{
        wait:true,
    },
});

export default i18n;