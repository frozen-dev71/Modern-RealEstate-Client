import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const StyledWrapper = styled(motion.div)`
  display: none;

  @media (min-width: 87.5em /* 1400px */) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 43.75rem; // 700px
    margin-bottom: 2rem;
    margin-right: 2rem;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
  }

  @media (min-width: 93.753em /* 1500px */) {
    margin-right: 4rem;
  }
`;

const StyledDotsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: start;
  padding-bottom: 1rem;

  & > * + * {
    margin-left: 1rem;
  }

  button {
    width: 10px;
    height: 10px;
    background-color: var(--clr-light);
    border-radius: 50%;
    border: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  width: 100%;

  & > * + * {
    margin-left: 1rem;
  }
`;

const StyledLinkImg = styled(Link)`
  height: 15.625rem; // 250px
  flex-basis: 60%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -5%;
    height: 100%;
    width: 2px;
    background-color: var(--clr-light);
    pointer-events: none;
  }

  img {
    font-size: var(--fs-text-small);
    color: var(--clr-light);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledLinkBox = styled.div`
  display: grid;
  place-items: center;
  flex-basis: 40%;
  border: 2px solid var(--clr-light);
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--clr-light);
  font-size: var(--fs-text-large);
`;

const StyledArrowWrapper = styled(motion.div)`
  margin-top: 4px; // To fix optical illusion
  margin-left: 0.5rem;
`;

export {
  StyledWrapper,
  StyledLinkImg,
  StyledLinkBox,
  StyledDotsWrapper,
  StyledContentWrapper,
  StyledArrowWrapper,
  StyledLink,
};
