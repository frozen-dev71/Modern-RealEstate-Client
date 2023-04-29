import styled from "styled-components";
import { StyledH2 } from "../../../styles/reusable/typography";

const Error = () => {
  return (
    <StyledErrorWrapper className="wrapper">
      <StyledH2 className="max-width-700">
        An error has occurred, please refresh the page
      </StyledH2>
    </StyledErrorWrapper>
  );
};

// Styles
const StyledErrorWrapper = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
`;

export default Error;
