import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }

  .content {
    display: block;
    font-size: var(--fs-text-large);
    margin-left: 1rem;
    color: ${props => (props.white ? 'var(--clr-light)' : 'var(--clr-dark)')};
  }
`;

const StyledArrowWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 4rem;
  height: 4rem;
  padding-right: 1.2rem;
`;

const StyledArrowIcon = styled(motion.svg)`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  fill: none;

  path {
    fill: ${props => (props.white ? 'var(--clr-light)' : 'var(--clr-dark)')};
  }

  .circlePath {
    fill: none;
    stroke: ${props => (props.white ? 'var(--clr-light)' : 'var(--clr-dark)')};
    stroke-width: 2;
  }
`;

export { StyledButton, StyledArrowIcon, StyledArrowWrapper };
