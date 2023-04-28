import { css } from 'styled-components';

// Breakpoints
export const breakpoints = {
  sm: '17.5em', // 280px
  md: '48em', // 768px
  lg: '59.375em', // 950px
  xl: '64rem', // 1024px
  xxl: '75em', // 1200px
};

// Media Queries FC
export const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
