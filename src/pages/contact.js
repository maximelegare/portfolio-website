import React from "react";

import PageWrapper from "../components/PageWrapper";
import { Box } from "../components/Core";
import Contact from "../sections/others/Contact";

const ContactPage = () => {
  return (
    <>
      <PageWrapper>
        <Box pt={4}>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};

export default ContactPage;
