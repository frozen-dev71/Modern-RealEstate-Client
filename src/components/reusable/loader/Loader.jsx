import styled from "styled-components";
import { respondTo } from "../../../styles/helpers";

const Loader = () => {
  return (
    <StyledLoader>
      <span className="loader" />
    </StyledLoader>
  );
};

// Styles
const StyledLoader = styled.div`
  .loader {
    width: 3.5rem;
    height: 3.5rem;
    border: 5px solid var(--clr-dark);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${respondTo.xl`
    .loader {
        width: 5rem;
        height: 5rem;
    }
  `}
`;

export default Loader;
