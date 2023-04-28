import { heightValue, removeScrollbar } from '../../../../utils/utilities';
import { exitRouteAnimWrapper, exitRouteAnimBlock } from './animations';
import {
  StyledFixedWrapper,
  StyledBlockWrapper,
  StyledBlock,
} from '../../../../styles/reusable/animations';

const TransitionUnmount = () => {
  return (
    <StyledFixedWrapper initial={{ width: '0' }} exit={{ width: '100%' }}>
      <StyledBlockWrapper
        exit='exit'
        variants={exitRouteAnimWrapper}
        onAnimationStart={removeScrollbar}
      >
        <StyledBlock variants={exitRouteAnimBlock} value={0} />
        <StyledBlock variants={exitRouteAnimBlock} value={heightValue} />
        <StyledBlock variants={exitRouteAnimBlock} value={heightValue * 2} />
      </StyledBlockWrapper>
    </StyledFixedWrapper>
  );
};

export default TransitionUnmount;
