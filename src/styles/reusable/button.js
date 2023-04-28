import styled from 'styled-components';
import { respondTo } from '../helpers';

export const StyledScrollButton = styled.button`
  display: none;
  border: 0;
  background-color: transparent;

  ${respondTo.md`
    position: relative;
    display: inline-block;
    font-size: var(--fs-text-large);
    color: ${props => (props.color === 'white' ? 'var(--clr-light)' : 'var(--clr-dark)')};

    &:hover {
      cursor: pointer;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: ${props =>
        props.color === 'white' ? 'var(--clr-light)' : 'var(--clr-dark)'};
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }   

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `}
`;
