import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HamburgerIcon from "./hamburgerIcon/HamburgerIcon";
import MobileMenu from "./mobileMenu/MobileMenu";
import DesktopMenu from "./desktopMenu/DesktopMenu";
import Logo from "../../reusable/logo/Logo";
import { addScrollbar } from "../../../utils/utilities";
import { StyledScrollButton } from "../../../styles/reusable/button";
import { useHeader } from "./useHeader";
import {
  StyledHeader,
  StyledWrapper,
  StyledInstagramIcon,
  StyledMailIcon,
  StyledBg,
} from "./styles";

const Header = ({ light }) => {
  const {
    headerRef,
    isBoxShadowActive,
    isMenuOpen,
    isTextWhite,
    currentWindowWidth,
    renderPathName,
    setIsMenuOpen,
    headerControls,
    bgControls,
    toFooter,
  } = useHeader(light);

  return (
    <StyledHeader
      ref={headerRef}
      className={`${isBoxShadowActive ? "boxShadow" : ""}`}
      animate={headerControls}
      bgTransparent={light}
    >
      <StyledWrapper className="wrapper">
        <div className="logo moveElementForward-10">
          <Logo type={isTextWhite ? "light" : "dark"} />
        </div>

        <div className="hamburger">
          <HamburgerIcon
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            light={isTextWhite}
          />
        </div>

        <div className="pathname moveElementForward-10">
          <svg
            width="15"
            height="45"
            viewBox="0 0 15 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.29459"
              y1="47.0932"
              x2="13.7395"
              y2="0.648381"
              stroke={isTextWhite ? "var(--clr-light)" : "var(--clr-dark)"}
            />
          </svg>
          <p className={`${isTextWhite ? "text-white" : "text-dark"}`}>
            {renderPathName}
          </p>
        </div>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          className={`moveElementForward-10 header-link instagram-icon ${
            isTextWhite ? "text-white" : "text-dark"
          }`}
          rel="noreferrer"
        >
          <StyledInstagramIcon />
        </a>

        <a
          href="mailto: berkbeleli@gmail.com"
          className={`moveElementForward-10 header-link mail-icon ${
            isTextWhite ? "text-white" : "text-dark"
          }`}
          rel="noreferrer"
        >
          <StyledMailIcon />
        </a>

        <Link
          to="/properties"
          className={`moveElementForward-10 header-link properties-link ${
            isTextWhite ? "text-white" : "text-dark"
          }`}
        >
          Our Properties
        </Link>

        <StyledScrollButton
          color={isTextWhite ? "white" : "black"}
          type="button"
          className={`moveElementForward-10 header-link contact-link ${
            isTextWhite ? "text-white" : "text-dark"
          }`}
          onClick={toFooter}
        >
          Contact
        </StyledScrollButton>
      </StyledWrapper>

      {/* Animation Background  */}
      <StyledBg initial={{ y: "-100%" }} animate={bgControls} />

      {/* Mobile Menu */}
      <AnimatePresence onExitComplete={addScrollbar}>
        {isMenuOpen && currentWindowWidth < 1024 ? <MobileMenu /> : null}
      </AnimatePresence>

      {/* Desktop Menu */}
      <AnimatePresence exitBeforeEnter>
        {isMenuOpen && currentWindowWidth >= 1024 ? (
          <DesktopMenu setIsMenuOpen={setIsMenuOpen} />
        ) : null}
      </AnimatePresence>
    </StyledHeader>
  );
};

// Proptypes
Header.propTypes = {
  light: PropTypes.bool.isRequired,
};

export default Header;
