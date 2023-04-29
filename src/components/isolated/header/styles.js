import styled from "styled-components";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { respondTo } from "../../../styles/helpers";

const StyledHeader = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  padding-right: var(--scrollbar-width);
  background-color: ${(props) =>
    props.bgTransparent ? "transparent" : "var(--clr-light)"};
  transition: box-shadow 0.3s ease-out;

  ${respondTo.lg`
      padding-top: 1.8rem;
      padding-bottom: 1.8rem;
  `}
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .hamburger {
    z-index: 20;
  }

  .properties-link {
    display: none;
    font-size: var(--fs-text-large);
    transition: transform 0.2s ease-out;

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: scale(0.9);
    }
  }

  .instagram-icon,
  .mail-icon,
  .pathname,
  .contact-link {
    display: none;
  }

  ${respondTo.lg`
      display: grid;
      grid-template-columns: repeat(3 , max-content) 1fr repeat(4, max-content); 
      grid-template-areas: 'hamburger logo pathname . properties instagram mail contact';
      align-items: center;

      .logo {
        grid-area: logo;
        margin: 0 1rem 0 3.75rem; //  3.75rem = 60px
      }

      .hamburger {
        grid-area: hamburger;
      }

      .pathname {
        display: flex;
        align-items: center;
        grid-area: pathname;

        p {margin-left : 1rem;}
      }

      .instagram-icon {
        display: inline-block;
        grid-area: instagram;
        margin-right: 2.5rem;
      }

      .mail-icon {
        display: inline-block;
        grid-area: mail;
        margin-right: 2.5rem;
      }

      .properties-link {
        display: inline-block;
        grid-area: properties;
        margin-right: 2.5rem;
      }
      
      .contact-link {
        display: inline-block;
        grid-area: contact;
      }
  `}
`;

const StyledInstagramIcon = styled(FaInstagram)`
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.5rem;
`;

const StyledMailIcon = styled(FiMail)`
  width: 1.8rem;
  height: 2rem;
  margin-top: 0.5rem;
`;

const StyledBg = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--clr-light);
`;

export {
  StyledHeader,
  StyledWrapper,
  StyledInstagramIcon,
  StyledMailIcon,
  StyledBg,
};
