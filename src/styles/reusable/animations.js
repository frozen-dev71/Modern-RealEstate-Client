import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const StyledFixedWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  width: ${props => (!props.widthValue ? '100%' : props.widthValue)};
  height: 100vh;
  ${props =>
    props.center
      ? css`
          display: grid;
          place-items: center;
        `
      : null}
  z-index: 50;
`;

const StyledBlockWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const StyledBlock = styled(motion.div)`
  position: absolute;
  top: ${props => `${props.value}%`};
  width: 100%;
  height: calc(100% / 3);
  background-color: var(--clr-dark);
  ${props =>
    props.right
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `}
`;

export { StyledFixedWrapper, StyledBlockWrapper, StyledBlock };
