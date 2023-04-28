import { css } from 'styled-components';
import { breakpoints } from './media';

// Styles required by external libraries
export const thirdPartyStyles = css`
  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 1;
    font-family: var(--font);
  }

  .leaflet-touch .leaflet-control-attribution {
    @media (min-width: ${breakpoints.xxl}) {
      margin-right: 1rem;
    }
  }

  .leaflet-marker-icon {
    width: 6.25rem; // 100px
    height: 6.25rem;
  }

  .leaflet-popup-content-wrapper {
    font-size: 1rem;
  }
`;
