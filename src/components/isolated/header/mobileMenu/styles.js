import styled from "styled-components";
import { motion } from "framer-motion";

const StyledFixedWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: hsla(var(--clr-dark-value), 0.9);
`;

const StyledNav = styled(motion.nav)`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  row-gap: 3.125rem; // 50px
  text-align: center;
`;

const StyledLi = styled(motion.li)`
  list-style: none;
`;

export { StyledFixedWrapper, StyledNav, StyledLi };
