import { createGlobalStyle } from "styled-components";
import {
  reset,
  variables,
  barlowFonts,
  utilityClasses,
  thirdPartyStyles,
} from "./helpers";

const GlobalStyles = createGlobalStyle`
${reset}
${variables};
${barlowFonts}; 
${utilityClasses}
${thirdPartyStyles}
`;

export default GlobalStyles;
