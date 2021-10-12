import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import imgBlood from "../../assets/my-images/svg/blood-splatter.svg";
import { Title, Button, Section, Box, Text } from "../../components/Core";


import { device } from "../../utils";
import imgL from "../../assets/my-images/jpg/main/main-image-1.jpg";

import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';

const ImgRight = styled.img`
  max-width: 100%;
`;

const ImgBlood = styled.img`
  width: 150px;
  height: auto;
  position: absolute;
  top: 0;
  /* right: 0; */
  transform: translate(-50%, -50%) rotate(10deg);
  z-index: 0;
  /* transform: scale(0.5); */
`;

const Hero = () => {

  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="7" className="mb-5 mb-lg-0">
              <Box>
                <Box>
                  <Text
                    variant="tag"
                    mb={4}
                    className="text-uppercase"
                    color="heading"
                    mb="40px"
                    style={{ display: "inline" }}
                  >
                    DEVELOPPEUR WEB, DESIGNER &{" "}
                  </Text>
                  <Text
                    variant="tag"
                    mb={4}
                    className="text-uppercase"
                    color="heading"
                    mb="40px"
                    style={{ display: "inline-block",position: "relative", zIndex: 100 }}
                  >
                    <i style={{ position: "relative", zIndex: 100}}>
                      «&nbsp;HORROR&nbsp;LOVER&nbsp;»
                    </i>
                    <ImgBlood src={imgBlood} alt="" />
                  </Text>
                </Box>

                <Title variant="hero">
                  <Trans>welcome</Trans>
                </Title>

                <Box mt="52px">
                  <Link
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                  >
                    <Button arrowRight>Explore works </Button>
                  </Link>
                </Box>
              </Box>
            </Col>
            <Col lg="5" md="8" sm="9">
              <div className="text-center text-lg-right position-relative">
                <div className="img-main">
                  <ImgRight src={imgL} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;

