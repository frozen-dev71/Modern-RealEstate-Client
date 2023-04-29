import styled, { css } from 'styled-components';
import { respondTo, fluidValues } from '../../../styles/helpers';

const StyledGrid = styled.article`
  ${respondTo.xl`
    display: grid;
    column-gap: 3.5rem;
    grid-template-columns: ${props => (props.reverse ? '2fr 1fr' : '1fr 2fr')};
   ${props =>
     props.reverse
       ? css`
           grid-template-areas: 'image content';
         `
       : css`
           grid-template-areas: 'content image';
         `}    
  `}
`;

const StyledContent = styled.div`
  ${respondTo.xl`
    padding: 2rem 0;
    grid-area: content;
  `}
`;

const StyledImgWrapper = styled.div`
  grid-area: image;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .parallax-img {
    height: ${fluidValues(280, 1400, 250, 800)};
    width: 100%;
    object-fit: cover;
  }

  ${respondTo.xl`
     position: relative;

     .parallax-img {
        position: absolute;
        top: -30%;
        height: 130%;
     }
  `}
`;

export { StyledGrid, StyledContent, StyledImgWrapper };
