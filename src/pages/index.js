import React from "react";
import { Element } from "react-scroll";

import { graphql } from 'gatsby'

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Works from "../sections/landing1/Works";
import Contact from "../sections/landing1/Contact";

const IndexPage = () => {
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
