import { css } from 'styled-components';

import BarlowRegular from '../../assets/fonts/Barlow-Regular.ttf';
import BarlowSemibold from '../../assets/fonts/Barlow-SemiBold.ttf';

export const barlowFonts = css`
  @font-face {
    font-family: 'Crimson Text';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Barlow Regular'), url(${BarlowRegular});
  }

  @font-face {
    font-family: 'Crimson Text';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Barlow SemiBold'), url(${BarlowSemibold});
  }
`;
