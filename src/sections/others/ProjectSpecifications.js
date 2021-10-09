import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import IconTechnology from "../../components/IconTechnology";

import { Section, Title, Text, Span } from "../../components/Core";
// import imgPhoto from "../../assets/image/jpg/portfolio-about.jpg";
import imgSignLight from "../../assets/image/png/signature.png";

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
  const { brand, thumbnail, technologies, categories } = workItem;

  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <img src={thumbnail} alt="folio" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
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

                <Title color="dark" variant="secSm">
                  {brand}
                </Title>
                <div className="mt-3">
                  {technologies.map(icon => (
                    <IconTechnology key={icon} icon={icon} small/>
                  ))}
                </div>
                <Text
                  color="dark"
                  className="mt-3 mt-lg-5"
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
    </>
  );
};

export default ProjectSpecifications;
