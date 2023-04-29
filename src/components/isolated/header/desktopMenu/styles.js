import styled from "styled-components";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const StyledWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  z-index: 50;
  background-color: var(--clr-dark);
`;

const StyledMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.8rem;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
  z-index: 60;

  &:hover {
    cursor: pointer;
  }
`;

const StyledCloseIcon = styled(AiOutlineClose)`
  color: var(--clr-light);
  width: 2.5rem;
  height: 2.5rem;
`;

const StyledNav = styled(motion.nav)`
  align-self: center;
  padding-bottom: 2.5rem; // To fix optical illusion
  z-index: 60;
`;

const StyledUl = styled.ul`
  & > * + * {
    margin-top: 3rem;
  }
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  width: max-content;

  &:hover {
    cursor: pointer;
  }
`;

const StyledProperties = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.8rem;
  z-index: 60;

  .properties {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > * + * {
      margin-left: 1.5rem;
    }

    p {
      color: var(--clr-light);
      font-weight: 600;
    }
  }
`;

const StyledLine = styled(motion.span)`
  display: inline-block;
  width: 4.375rem; // 70px
  padding-top: 0.3125rem;
  background-color: var(--clr-light);
  margin-right: 2.5rem;
`;

const StyledImgWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 25%;
  width: 100%;
  height: 100%;
  z-index: 55;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(var(--clr-dark-value), 0.3);
  }

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export {
  StyledWrapper,
  StyledMenuHeader,
  StyledCloseIcon,
  StyledButton,
  StyledNav,
  StyledUl,
  StyledLi,
  StyledProperties,
  StyledLine,
  StyledImgWrapper,
};
