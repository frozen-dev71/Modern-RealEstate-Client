import styled from 'styled-components';
import { fluidValues, respondTo } from '../../../../styles/helpers';

const StyledContent = styled.div`
  margin-top: ${fluidValues(280, 1200, 24, 40)};

  & > * + * {
    margin-top: ${fluidValues(280, 1200, 24, 40)};
  }
`;

const StyledImgWrapper = styled.div`
  width: 100%;
  height: ${fluidValues(280, 1024, 300, 600)};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${respondTo.xl`
     height: 28.125rem; // 450px
  `}
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: var(--fs-text-large);
  }

  ${respondTo.xl`
      padding: 0 2rem;
  `}
`;

const StyledLine = styled.div`
  margin-top: 1.5rem;
  height: 1px;
  background-color: var(--clr-dark);

  ${respondTo.xl`
    margin: 1rem 2rem 0 2rem;
  `}
  }
`;

export { StyledContent, StyledImgWrapper, StyledInfo, StyledLine };
