import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fluidValues } from '../helpers';

const StyledH1 = styled(motion.h1)`
  font-size: var(--fs-1);
  font-weight: 600;
  color: ${props => (props.light ? 'var(--clr-light)' : 'var(--clr-dark)')};
`;

const StyledH2 = styled(motion.h2)`
  font-size: var(--fs-2);
  font-weight: ${props => (props.regular ? '400' : '600')};
  color: ${props => (props.light ? 'var(--clr-light)' : 'var(--clr-dark)')};
`;

const StyledH3 = styled.h3`
  font-size: var(--fs-3);
  font-weight: ${props => (props.regular ? '400' : '600')};
`;

const StyledInfo = styled(motion.span)`
  display: block;
  font-size: 1.8125rem; // 29px
  font-weight: 400;
`;

const StyledError = styled.span`
  font-size: var(--fs-error);
  font-weight: 400;
  line-height: 1;
`;

const StyledBoxText = styled.span`
  font-size: var(--fs-text-large);
  color: var(--clr-light);
  letter-spacing: 0.8px;
  display: block;
`;

const StyledDesktopLink = styled(Link)`
  font-size: ${fluidValues(1024, 1400, 70, 85)};
  line-height: 1.2;
  font-weight: 600;
  user-select: none;
`;

export { StyledH1, StyledH2, StyledH3, StyledError, StyledInfo, StyledBoxText, StyledDesktopLink };
