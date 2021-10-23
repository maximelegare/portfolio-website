import React from "react";

import IconTechnology from "../IconTechnology";
import { Row, Col, Container } from "react-bootstrap";

import { Section } from "../Core";
import { marginRight } from "styled-system";

const ListOfLinks = ({ brand, time, links, right, section }) => {
  return (
    <>
      {links && (
        <>
          {section ? (
            <Section>
              <Container>
                <Row>
                  <Col className={right ? "d-flex justify-content-end" : ""}>
                    {links.map(({ link, icon }, idx) => (
                      <IconTechnology
                        icon={icon}
                        link={link}
                        key={idx}
                        variant="big"
                      />
                    ))}
                  </Col>
                </Row>
              </Container>
            </Section>
          ) : (
            <Container>
              <Row style={{ marginTop: "15px" }}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  {links.map(({ link, icon }, idx) => (
                    <IconTechnology
                      icon={icon}
                      link={link}
                      key={idx}
                      variant="big"
                    />
                  ))}
                </div>
              </Row>
            </Container>
          )}
        </>
      )}
    </>
  );
};

export default ListOfLinks;
