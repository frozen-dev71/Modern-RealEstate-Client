import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { heightValue, addScrollbar } from '../../../../utils/utilities';
import {
  StyledFixedWrapper,
  StyledBlockWrapper,
  StyledBlock,
} from '../../../../styles/reusable/animations';
import { blocksWrapperAnimation, blockAnimation } from './animations';

const TransitionMount = ({ isEntranceActive }) => {
  const [fixedWrapperWidth, setFixedWrapperWidth] = useState(isEntranceActive ? '0' : '100%');
  const animationControls = useAnimation();

  // Animate
  useEffect(() => {
    if (isEntranceActive) return;

    animationControls.start('to');
  }, [isEntranceActive, animationControls]);

  const onAnimationComplete = () => {
    setFixedWrapperWidth('0');
    addScrollbar();
  };

  return (
    <StyledFixedWrapper widthValue={fixedWrapperWidth}>
      <StyledBlockWrapper animate={animationControls} variants={blocksWrapperAnimation}>
        <StyledBlock variants={blockAnimation} value={0} right />
        <StyledBlock variants={blockAnimation} value={heightValue} right />
        <StyledBlock
          variants={blockAnimation}
          value={heightValue * 2}
          onAnimationComplete={() => onAnimationComplete()}
          right
        />
      </StyledBlockWrapper>
    </StyledFixedWrapper>
  );
};

// Proptypes
TransitionMount.propTypes = {
  isEntranceActive: PropTypes.bool.isRequired,
};

export default TransitionMount;
