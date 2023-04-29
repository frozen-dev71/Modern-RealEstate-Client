import PropTypes from "prop-types";
import { StyledBtn, StyledIconWrapper } from "./styles";

const HamburgerIcon = ({ isMenuOpen, setIsMenuOpen, light }) => {
  return (
    <StyledBtn
      type="button"
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      <StyledIconWrapper isLight={isMenuOpen || light}>
        <svg viewBox="0 0 100 100" className={`${isMenuOpen ? "opened" : ""}`}>
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </StyledIconWrapper>
    </StyledBtn>
  );
};

// Proptypes
HamburgerIcon.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  light: PropTypes.bool.isRequired,
};

export default HamburgerIcon;
