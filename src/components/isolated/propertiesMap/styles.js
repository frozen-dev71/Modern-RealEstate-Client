import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fluidValues } from '../../../styles/helpers';

const StyledMapWrapper = styled(motion.div)`
  height: ${fluidValues(280, 1000, 200, 350)}; // 200px - 350px
  margin-top: ${fluidValues(280, 1000, 88, 113)};
  position: relative;
  display: grid;
  place-items: center;
  text-align: center;
  overflow: hidden;
`;

const StyledOverlay = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
  background-color: hsla(var(--clr-dark-value), 0.8);

  &:hover {
    cursor: pointer;
  }
`;

const StyledTitleWrapper = styled(motion.div)`
  padding-bottom: ${fluidValues(280, 1000, 16, 24)};
  text-align: left;
`;

const StyledCloseBtn = styled(motion.button)`
  background-color: var(--clr-dark);
  color: var(--clr-light);
  border: 0;
  position: absolute;
  top: 0;
  z-index: 2;
  width: 9.375rem; // 150px
  padding: 0.5rem 0;
  transition: background-color 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: var(--clr-dark-lighter);
  }
`;

export { StyledMapWrapper, StyledOverlay, StyledTitleWrapper, StyledCloseBtn };
