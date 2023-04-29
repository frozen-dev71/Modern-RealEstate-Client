import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { fluidValues, respondTo } from '../../../styles/helpers';

const StyledSection = styled.section`
  & > * + * {
    margin-top: 4.5rem; // 72px
  }
`;

const StyledTitleWrapper = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`;

const StyledFlexWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  ${respondTo.xl`
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     border-top: 1px solid var(--clr-dark);
   `};
`;

const StyledBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  ${respondTo.xl`
    padding: 3rem 1rem;

    ${props =>
      props.borders
        ? css`
            border-right: 1px solid var(--clr-dark);
            border-left: 1px solid var(--clr-dark);
          `
        : null}
  `}

  &::after {
    content: '';
    height: 1px;
    width: 100%;
    margin-top: 1rem;
    background-color: var(--clr-dark);

    ${respondTo.xl`
      height: 0;
      margin-top: 0;
    `}
  }
`;

const StyledImgWrapper = styled.div`
  width: 100%;
  height: ${fluidValues(280, 1024, 500, 1000)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export { StyledSection, StyledTitleWrapper, StyledFlexWrapper, StyledBox, StyledImgWrapper };
