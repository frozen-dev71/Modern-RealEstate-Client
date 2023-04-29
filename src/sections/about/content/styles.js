import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fluidValues, respondTo } from '../../../styles/helpers';

const StyledWrapper = styled(motion.div)`
  display: grid;
  place-items: center;
  text-align: center;
  margin-top: ${fluidValues(280, 1200, 120, 160)};
`;

const StyledParragraph = styled(motion.p)`
  max-width: 50rem; // 800px
`;

const StyledSubText = styled(motion.span)`
  display: block;
  padding-bottom: 1rem;

  ${respondTo.xl`
      padding-bottom: 0
  `}
`;

const StyledImg = styled.img`
  width: 100%;
`;

export { StyledWrapper, StyledParragraph, StyledSubText, StyledImg };
