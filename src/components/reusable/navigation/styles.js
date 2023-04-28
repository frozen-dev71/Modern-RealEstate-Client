import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fluidValues, respondTo } from '../../../styles/helpers';

const StyledWrapper = styled.article`
  ${respondTo.xl`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
   `}
`;

const StyledBox = styled(Link)`
  display: grid;
  place-items: center;
  position: relative;

  h2,
  span {
    position: absolute;
    z-index: 2;
  }

  span {
    top: 1.2rem;
    left: 1.2rem;

    ${respondTo.md`
        top: 2.5rem;
        left: 2.5rem;
   `}
  }

  // Animation
  &:hover .img::after {
    background-color: hsla(var(--clr-dark-value), 0.3);
  }

  &:hover .img img {
    transform: scale(1.1);
  }
`;

const StyledImgWrapper = styled.div`
  position: relative;
  height: ${fluidValues(280, 1200, 400, 600)};
  width: 100%;
  overflow: hidden;

  // Overlay
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(var(--clr-dark-value), 0.5);
    transition: background-color 0.2s ease;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-out;
  }
`;

export { StyledWrapper, StyledBox, StyledImgWrapper };
