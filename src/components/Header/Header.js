import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Link } from "react-scroll";

import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import NestedMenu from "../NestedMenu";
import { device } from "../../utils";
import Logo from "../Logo";
import { menuItems } from "./menuItems";

import { useI18next } from "gatsby-plugin-react-i18next";
import { Link as LinkI18n } from "gatsby-plugin-react-i18next";

import "flag-icon-css/css/flag-icon.min.css";

import globe from "../../assets/my-images/svg/globe.svg";

import IconTechnology from "../IconTechnology";

const LinkI18nStyled = styled(LinkI18n)`
  margin-left: 5px;
`;

const SiteHeader = styled.header`
  padding: 0;
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  @media ${device.lg} {
    position: fixed !important;
    transition: 0.4s;
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.4s;
    }
    &.reveal-header {
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: ${({ dark, theme }) => theme.colors.bg};
    }
  }
`;

const ToggleButton = styled.button`
  color: ${({ dark, theme }) => theme.colors.front}!important;
  border-color: ${({ dark, theme }) => theme.colors.front}!important;
`;

const Menu = styled.ul`
  @media ${device.lg} {
    display: flex;
    justify-content: flex-end;
  }
  .dropdown-toggle {
    cursor: pointer;
  }
  > li {
    > .nav-link {
      @media ${device.lg} {
        color: ${({ dark, theme }) => theme.colors.front}!important;
        transition: 0.4s;
        align-items: center;
        display: inline-flex;
        font-size: 15px;
        font-weight: 700;
        line-height: 24px;
        padding-top: 18px !important;
        padding-bottom: 18px !important;
        padding-left: 18px !important;
        padding-right: 18px !important;

        text-transform: lowercase;

        &.dropdown-toggle:after {
          margin-left: 10px;
          position: relative;
          transform: rotate(90deg);
          top: 1px;
          content: "\\ea06";
          border: none;
          font-family: "Grayic";
          font-size: 24px;
          transition: 0.4s;
          font-weight: 900;
          line-height: 14px;
        }
      }
    }
    &.nav-item:hover > .nav-link,
    &.nav-item.active > .nav-link {
      color: ${({ theme }) => theme.colors.primary} !important;
      &:after {
        transform: rotate(-90deg);
      }
    }
  }
  .nav-item.dropdown {
    @media ${device.lg} {
      position: relative;
      z-index: 99;
    }
    &:hover {
      > .menu-dropdown {
        @media ${device.lg} {
          top: 90%;
          right: 0;
          opacity: 1;
          pointer-events: visible;
        }
      }
    }
  }
`;

const MenuDropdown = styled.ul`
  list-style: none;
  @media ${device.lg} {
    top: 110%;
    position: absolute;
    min-width: 150px;
    max-width: 150px;
    box-shadow: 0 52px 54px rgba(65, 62, 101, 0.3);

    background-color: ${({ dark, theme }) => theme.colors.light};
    padding: 15px 0px;
    z-index: 99;
    opacity: 0;
    transition: opacity 0.4s, top 0.4s;
    pointer-events: none;
    left: -90%;
    border: 1px solid #e5e5e5;
    border-radius: 0 0 10px 10px;
    display: block;
    border-top: ${({ theme }) => `3px solid ${theme.colors.primary}`};
  }
  > .drop-menu-item {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 15px;
    font-weight: 300;
    letter-spacing: -0.5px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;

    a {
      color: ${({ theme }) => theme.colors.dark} !important;
      transition: all 0.3s ease-out;
      position: relative;
      display: flex;
      align-items: center;
      font-weight: 700;
      text-transform: lowercase;
      &.dropdown-toggle::after {
        margin-left: 10px;
        position: relative;
        top: 1px;
        content: "\\ea06";
        border: none;
        font-family: "Grayic";
        font-size: 24px;
        transition: 0.4s;
        font-weight: 900;
        line-height: 14px;
      }
    }

    &:hover,
    &.active {
      > a {
        color: ${({ theme }) => theme.colors.secondary} !important;
        text-decoration: none;
        &::after {
          transform: rotate(180deg);
        }
      }
    }
    &.dropdown {
      position: relative;

      &:hover {
        > .menu-dropdown {
          @media ${device.lg} {
            top: 10px;
            opacity: 1;
            pointer-events: visible;
            transform: translateX(-100%);
          }
        }
      }
      > .menu-dropdown {
        border-top-color: ${({ theme }) => theme.colors.success};
        @media ${device.lg} {
          top: 10px;
          left: 0%;
          opacity: 0;
          transform: translateX(-110%);
          transition: 0.4s;
          pointer-events: none;
        }
        > .drop-menu-item {
          @media ${device.lg} {
            padding-left: 30px;
            padding-right: 30px;
          }
        }
      }
    }
  }
  &.dropdown-right {
    left: auto;
    right: -90%;
  }
`;

const Header = ({ isDark }) => {
  const languages = [
    {
      code: "fr",
      name: "Français",
      country_code: "fr",
      url: "/fr",
      pdfLink: "../../assets/my-images/jpg/danielle/danielle-1.jpg"
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
      url: "/",
      default: true,
      pdfLink: "../../assets/my-images/jpg/danielle/danielle-2.jpg"
    }
  ];

  const { originalPath } = useI18next();

  // const currentLanguageCode = localStorage.getItem("gatsby-i18next-language");

  const gContext = useContext(GlobalContext);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  const hT = gContext.headerTraductions;

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  return (
    <>
      <SiteHeader
        className={`sticky-header ${showScrolling ? "scrolling" : ""} ${
          showReveal ? "reveal-header" : ""
        }`}
        dark={isDark ? 1 : 0}
      >
        <Container fluid>
          <nav className="navbar px-0 px-md-3 site-navbar offcanvas-active navbar-expand-lg navbar-light">
            {/* <!-- Brand Logo--> */}
            <div className="brand-logo">
              <Logo color={isDark ? "light" : "dark"} />
            </div>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav ml-lg-auto mr-3">
                <Menu
                  className="navbar-nav d-none d-lg-flex"
                  dark={isDark ? 1 : 0}
                >
                  {/* Open about modal */}
                  <li>
                    <Link
                      to="works"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={1000}
                      className="nav-link"
                    >
                      <a
                        href="/#"
                        onClick={e => {
                          e.preventDefault();
                        }}
                      >
                        {hT?.work.title}
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/#"
                      onClick={e => {
                        e.preventDefault();
                        gContext.toggleAbout();
                      }}
                    >
                      {hT?.about.title}
                    </a>
                  </li>

                  {/* Open contact modal */}

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      href="/"
                      onClick={e => e.preventDefault()}
                    >
                      {hT?.resume.title}
                    </a>
                    <MenuDropdown
                      className="menu-dropdown "
                      dark={isDark ? 1 : 0}
                      style={{ width: "10px" }}
                      css={{
                        marginLeft: `${
                          hT?.resume.title === "resumé." ? "55px" : "150px"
                        }`
                      }}
                    >
                      {languages.map(lng => {
                        return (
                          <li
                            key={lng.name}
                            style={{ margin: "5px 0 5px 10px" }}
                          >
                            <a href={lng.pdfLink} download>
                              Download {lng.code}
                            </a>
                          </li>
                        );
                      })}
                    </MenuDropdown>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      href="/"
                      onClick={e => e.preventDefault()}
                    >
                      <IconTechnology icon={globe} />
                    </a>
                    <MenuDropdown
                      className="menu-dropdown"
                      dark={isDark ? 1 : 0}
                      style={{ width: "10px" }}
                    >
                      {languages.map(lng => {
                        return (
                          <li key={lng.name} style={{ margin: "5px 0" }}>
                            <LinkI18nStyled
                              to={originalPath}
                              language={lng.code}
                            >
                              <span
                                className={`flag-icon flag-icon-${lng.country_code} mx-2`}
                              ></span>
                              <span style={{ width: "100%" }}>{lng.name}</span>
                            </LinkI18nStyled>
                          </li>
                        );
                      })}
                    </MenuDropdown>
                  </li>
                </Menu>
              </div>
            </div>

            <ToggleButton
              className={`navbar-toggler btn-close-off-canvas ml-3 ${
                gContext.visibleOffCanvas ? "collapsed" : ""
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={gContext.toggleOffCanvas}
              dark={isDark ? 1 : 0}
            >
              {/* <i className="icon icon-simple-remove icon-close"></i> */}
              <i className="icon icon-menu-34 icon-burger d-block"></i>
            </ToggleButton>
          </nav>
        </Container>
      </SiteHeader>
      <Offcanvas
        show={gContext.visibleOffCanvas}
        onHideOffcanvas={gContext.toggleOffCanvas}
      >
        <NestedMenu translation={hT} languages={languages}/>
      </Offcanvas>
    </>
  );
};
export default Header;
