import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import Masonry from "react-masonry-component";

import { Box } from "../../components/Core";

import IconTechnology from "../../components/IconTechnology";
import { Button } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";
// import imgPhoto from "../../assets/image/jpg/portfolio-about.jpg";
import imgSignLight from "../../assets/image/png/signature.png";
import ImageCard from "../../components/Card/ImageCard";

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.dark} !important;
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






const ProjectSpecifications = ({
  workItem,
  hero = true,
  bg = "dark",
  ...rest
}) => {
  const { thumbnail, technologies, categories, otherImages } = workItem;

  const masonryOptions = {
    transitionDuration: 1000
  };

  return (
    <>
      <Section hero>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <Box>
                {categories.map((category, index) => {
                  return (
                    <Text
                      variant="tag"
                      mb={2}
                      key={category}
                      css={{ display: "inline" }}
                    >
                      {category}
                      {index !== categories.length - 1 ? " — " : ""}
                    </Text>
                  );
                })}
                <Title className="my-4">
                  Complete Branding <br /> Solution for DataTryper.
                </Title>
                <div className="mt-3">
                  {technologies.map(icon => (
                    <IconTechnology key={icon} icon={icon} />
                  ))}
                </div>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section css={{ top: 0 }}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <Row className="justify-content-center text-center">
                {/* <img
                  src={thumbnail}
                  alt=""
                  className="img-fluid  w-auto"
                  style={{ maxHeight: "60vh" }}
                /> */}
                <ImageCard
                  alt=""
                  thumbnail={thumbnail}
                  className="img-fluid  w-auto"
                  css={{maxHeight:"70vh"}}
                />
              </Row>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Text
                  color="dark"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  UX Designer based in New York, USA. I am designing with a
                  minimal and beautiful design in mind.
                </Text>
                <Text color="dark" className="mt-4">
                  I strive for a minimal and beautiful design.
                </Text>
                <div className="mt-4">
                  <Text color="dark">Email me at</Text>

                  <Text variant="p">
                    <a
                      href="mailto:hello@folio.com"
                      className="font-weight-bold"
                    >
                      <Span color="dark">hello@folio.com</Span>
                    </a>
                  </Text>
                </div>
                <div className="mt-5">
                  <img src={imgSignLight} alt="sign" className="img-fluid" />
                </div>
                <Text color="dark" className="mt-3 font-weight-bold">
                  Bruce Ryan
                </Text>
                <Text color="dark" variant="small">
                  Founder of Folio Digital
                </Text>
                <div className="mt-5 d-flex">
                  <LinkSocial
                    href="https://www.dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Dribble
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mr-3"
                  >
                    Twitter
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Facebook
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-weight-bold"
                  >
                    Instagram
                  </LinkSocial>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <div className="mt-lg-3">
        <Container>
          <Row>
            <Col lg="4" className="mb-4 mb-lg-0">
              <Text variant="tag">Client</Text>
              <Title variant="cardBig" className="mt-3">
                DataTryper
              </Title>
            </Col>
            <Col lg="4" className="mb-4 mb-lg-0">
              <Text variant="tag">Time</Text>
              <Title variant="cardBig" className="mt-3">
                Oct 15, 2019
              </Title>
            </Col>
            <Col lg="4" className="d-flex justify-content-lg-end">
              <Button arrowRight>Live work</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Section>
        <Container>
          <Masonry
            options={masonryOptions}
            className={"masonry-grid row"} // default ''
          >
            {otherImages.map((item, index) => {
              return (
                <Col lg="4" md="6" sm="12" key={index} className="filtr-item">
                  <ImageCard
                    thumbnail={item.thumbnail}
                    css={{marginTop:"30px"}}
                    className="w-100"
                  />
                </Col>
              );
            })}
          </Masonry>
        </Container>
      </Section>
    </>
  );
};

export default ProjectSpecifications;
