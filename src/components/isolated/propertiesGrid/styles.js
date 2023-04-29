import styled from 'styled-components';
import { fluidValues, respondTo } from '../../../styles/helpers';

const StyledGrid = styled.section`
  & > * + * {
    margin-top: 4.5rem; // 72px
  }

  ${respondTo.xl`
    & > * + * {
      margin-top: 0;
    }

    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    row-gap: 4.5rem;
  `}
`;

const StyledWrapper = styled.div`
  & > * + * {
    margin-top: 4.5rem; // 72px
  }
`;

const StyledFiltersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, max-content));
  column-gap: ${fluidValues(280, 500, 8, 40)};
  row-gap: 1.5rem;

  @media (min-width: 31.25em /* 500px */) {
    grid-template-columns: repeat(4, minmax(min-content, max-content));
  }
`;

const StyledBtnFilter = styled.button`
  justify-self: start;
  font-size: var(--fs-text-large);
  background-color: white;
  border: 0;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition: border-bottom 0.4s ease;

  &:hover {
    border-bottom: 1px solid var(--clr-dark);
  }
`;

export { StyledWrapper, StyledGrid, StyledFiltersWrapper, StyledBtnFilter };
