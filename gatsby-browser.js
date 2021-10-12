import React from "react";
import { GlobalProvider } from "./src/context/GlobalContext";
import Layout from "./src/components/Layout";

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     backend:{
//       loadPath:'assets/locales/{{lng}}/transitions.json'
//     },
//     lng: document.querySelector('html').lang, // if you're using a language detector, do not define the lng option
//     fallbackLng: "en",
//     detection:{
//       order: [ 'cookie','htmlTag', 'localStorage', 'path', 'subdomain'],
//       caches:['cookie']
//     },
//     react:{useSuspense:false}
//   })
// ​

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return(
  <GlobalProvider>{element}</GlobalProvider>
)};
