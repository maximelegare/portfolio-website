import React, {useContext} from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import Specifications from "../../components/Specificatons/Specifications";

import GlobalContext from "../../context/GlobalContext";


import { Section, Title, Text, Span } from "../../components/Core";
import imgPhoto from "../../assets/my-images/jpg/about/profile-1.jpg";
import ListOfLinks from "../../components/ListOfLinks/ListOfLinks";

import { aboutData } from "../../data/designWorks1";

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

const About = ({ hero = true, bg = "dark",  ...rest }) => {

  const gContext = useContext(GlobalContext)
  const mT = gContext.aboutModalTraductions
  

  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <img src={imgPhoto} alt="folio" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="dark" variant="secSm">
                  {mT?.mainTitle}
                </Title>
                <Specifications textSpecifications={mT?.descriptions}/>
                <div className="mt-4">
                  <Text color="dark">Email me at</Text>

                  <Text variant="p">
                    <a
                      href="mailto:mleg1234@protonmail.com"
                      className="font-weight-bold"
                    >
                      <Span color="dark">mleg1234@protonmail.com</Span>
                    </a>
                  </Text>
                </div>
                <Text color="dark" className="mt-3 font-weight-bold">
                  Bruce Ryan
                </Text>
                <ListOfLinks links={aboutData.links} className="mt-3"/>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default About;
