import React, {useContext, useEffect} from "react";
import { Element } from "react-scroll";

import GlobalContext from "../context/GlobalContext";
import { graphql } from 'gatsby'

import { useTranslation } from "gatsby-plugin-react-i18next";


import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Works from "../sections/landing1/Works";
import Contact from "../sections/landing1/Contact";

const IndexPage = () => {
  
  const { t } = useTranslation()
  const aboutTraductions = t("aboutModal", {returnObjects:true})
  const headerTraductions = t("headerLinks", {returnObjects:true})


  console.log(headerTraductions)

  const gContext = useContext(GlobalContext)
  
  useEffect(() => {
    gContext.changeAboutModalTraductions(aboutTraductions)

    gContext.changeHeaderLinksTraductions(headerTraductions)
  },[])

  
  return (
    <>
      <PageWrapper>
      
        <Hero />
        <Element name="works">
          <Works />
        </Element>

        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
