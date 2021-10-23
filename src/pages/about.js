import React from "react";

import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';

import PageWrapper from "../components/PageWrapper";
import { Box } from "../components/Core";
import About from "../sections/others/About";

const AboutPage = () => {
  const { t } = useTranslation()
  const textTranslation = t("welcome")
  console.log(textTranslation) 
  return (
    <>
      <PageWrapper >
        <Box pt={4}>
          <About />
        </Box>
      </PageWrapper>
    </>
  );
};

export default AboutPage;

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