import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";

import { Section, Box, ListNav } from "../../components/Core";
import WorkCard from "../../components/Card/WorkCard";
import { designWorks1 } from "../../data";

const Works = () => {
  const [items, setItems] = useState([]);
  const [activeLink, setActiveLink] = useState("*");

  const gContext = useContext(GlobalContext);

  const categoriesFilters = gContext.categoriesTraductions;

  useEffect(() => {
    setItems(designWorks1);
  }, []);

  const filterBy = cat => {
    if (cat === "*") {
      setActiveLink("*");
      setItems(designWorks1);
    } else {
      const filteredItems = designWorks1.filter(item => {
        return item.categories.indexOf(cat) !== -1;
      });
      setActiveLink(cat);
      setItems(filteredItems);
    }
  };

  const masonryOptions = {
    transitionDuration: 1000
  };

  return (
    <>
      {/* <!-- Works Area --> */}
      <Section className="position-relative">
        <Container>
          <Box mb="2.5rem" ml="-1.75rem">
            <ListNav className="nav">
              {categoriesFilters?.map(({ title, filter }, idx) => (
                <li className="nav-item" key={idx}>
                  <a
                    className={`nav-link font-weight-bold text-uppercase ${
                      activeLink === filter ? "active" : null
                    }`}
                    onClick={e => {
                      e.preventDefault();
                      filterBy(filter);
                    }}
                  >
                    {title}
                  </a>
                </li>
              ))}

              {/* <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "developpement web" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("developpement web");
                  }}
                >
                  Developpement Web
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "photographie" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("photographie");
                  }}
                >
                  Photographie
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "graphisme" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("graphisme");
                  }}
                >
                  Graphisme
                </a>
              </li> */}
            </ListNav>
          </Box>
        </Container>

        <Container fluid>
          <Masonry
            options={masonryOptions}
            className={"masonry-grid row"} // default ''
          >
            {items.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="filtr-item">
                <WorkCard workItem={item} mb="30px" link={item.link} />
              </Col>
            ))}
          </Masonry>
        </Container>
      </Section>
    </>
  );
};

export default Works;
