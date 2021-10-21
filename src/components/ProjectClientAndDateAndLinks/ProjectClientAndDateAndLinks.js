import React from "react";

import IconTechnology from "../IconTechnology";
import { Row, Col, Container } from "react-bootstrap";

import { Text, Title, Section } from "../Core";
import githubWhite from "../../assets/my-images/svg/technologies/githubWhite.svg";
import globeWhite2 from "../../assets/my-images/svg/globeWhite2.svg";

const ProjectClientAndDateAndLinks = ({ brand, time, links }) => {
  return (
    <>
      {links && (
        <Section>
          <Container>
            <Row>
              {/* <Col lg="4" className="mb-4 mb-lg-0">
        <Text variant="tag">Client</Text>
        <Title variant="cardBig" className="mt-3">
          {brand}
        </Title>
      </Col>
      <Col lg="4" className="mb-4 mb-lg-0">
        <Text variant="tag">Time</Text>
        <Title variant="cardBig" className="mt-3">
          {time}
        </Title>
      </Col> */}
              <Col className="d-flex justify-content-end">
                {links?.github && (
                  <IconTechnology
                    icon={githubWhite}
                    link={links?.github}
                    variant="big"
                  />
                )}
                {links?.liveWebsite && (
                  <IconTechnology
                    icon={globeWhite2}
                    link={links?.liveWebsite}
                    variant="big"
                  />
                )}
              </Col>
            </Row>
          </Container>
        </Section>
      )}
    </>
  );
};

export default ProjectClientAndDateAndLinks;
