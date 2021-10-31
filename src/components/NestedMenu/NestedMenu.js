import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ListGroup, Collapse } from "react-bootstrap";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { Link } from "gatsby";
import GlobalContext from "../../context/GlobalContext";
import { useI18next } from "gatsby-plugin-react-i18next";

import { Link as LinkI18n } from "gatsby-plugin-react-i18next";

import { Link as LinkScroll } from "react-scroll";

const NestedMenuContainer = styled.div`
  a {
    color: ${({ theme }) => theme.colors.dark} !important;
    transition: all 0.3s ease-out;
    font-weight: 700;
    text-transform: lowercase;

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
    }
  }

  .list-group-item {
    font-weight: 700;
    text-transform: lowercase;
    color: ${({ theme }) => theme.colors.dark};
    &:hover,
    &:active,
    &.active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      background-color: transparent;
      border-bottom: 1px solid rgba(22, 28, 45, 0.125);
    }

    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`;

const defaultMenuItems = [
  {
    name: "billing",
    label: "Billing",
    items: [
      { name: "statements", label: "Statements" },
      { name: "reports", label: "Reports" }
    ]
  }
];

const MenuItem = ({
  label,
  title,
  name,
  code,
  pdfLink,
  items,
  mainLabel,
  depthStep = 20,
  depth = 0,
  changeLng,
  country_code,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = Array.isArray(items);

  const gContext = useContext(GlobalContext);
  const { originalPath } = useI18next();
  return (
    <>
      {hasSubItems ? (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            padding-right: 0 !important;
            cursor: pointer;
          `}
          onClick={() => setOpen(!open)}
          className={`d-flex align-items-center justify-content-between ${
            open ? "active" : ""
          }`}
        >
          <span>{mainLabel}</span>
          <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            padding-right: 0 !important;
          `}
        >
          {changeLng ? (
            <LinkI18n to={originalPath} language={code}>
              <span
                className={`flag-icon flag-icon-${country_code} mx-2`}
              ></span>
              <span style={{ width: "100%" }}>{name}</span>
            </LinkI18n>
          ) : (
            <a href={pdfLink} download>
              <span style={{ width: "100%" }}>Download {code}</span>
            </a>
          )}
        </ListGroup.Item>
      )}

      {hasSubItems ? (
        <Collapse in={open}>
          <ListGroup>
            {items.map(subItem => (
              <MenuItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
                changeLng={changeLng}
              />
            ))}
          </ListGroup>
        </Collapse>
      ) : null}
    </>
  );
};

const NestedMenu = ({
  translation,
  languages,
  menuItems = defaultMenuItems
}) => {
  const gContext = useContext(GlobalContext);

  return (
    <NestedMenuContainer>
      <ListGroup variant="flush">
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={`${menuItem.title}${index}`}
            depthStep={20}
            depth={0}
            items={languages}
            mainLabel={translation?.language.title}
            changeLng={true}
          />
        ))}
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={`${menuItem.title}${index}`}
            depthStep={20}
            depth={0}
            items={languages}
            mainLabel={translation?.resume.title}
          />
        ))}
        {/* Open about modal */}
        <ListGroup.Item
          css={`
            padding-left: 0px !important;
            padding-right: 0 !important;
          `}
        >
          {
            <LinkScroll
              to="works"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              <a
                href="/#"
                onClick={e => {
                  e.preventDefault();
                  if (gContext.visibleOffCanvas) {
                    gContext.toggleOffCanvas();
                  }
                }}
              >
                {translation?.work.title}
              </a>
            </LinkScroll>
          }
        </ListGroup.Item>
        <ListGroup.Item
          css={`
            padding-left: 0px !important;
            padding-right: 0 !important;
          `}
        >
          {
            <a
              href="/#"
              onClick={e => {
                e.preventDefault();
                gContext.toggleAbout();
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}
            >
              {translation?.about.title}
            </a>
          }
        </ListGroup.Item>
      </ListGroup>
    </NestedMenuContainer>
  );
};

export default NestedMenu;
