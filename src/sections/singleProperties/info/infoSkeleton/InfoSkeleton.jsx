import styled from "styled-components";
import PlaceholderLoading from "react-placeholder-loading";
import { respondTo } from "../../../../styles/helpers";
import { StyledSection, StyledImgWrapper } from "../styles";

const InfoSkeleton = () => {
  return (
    <StyledSection>
      <StyledFlexSkeleton className="wrapper">
        <div className="max-width-500">
          <PlaceholderLoading shape="rect" width="100%" height="80" />
        </div>

        <div className="max-width-250">
          <PlaceholderLoading shape="rect" width="80%" height="32" />
        </div>
      </StyledFlexSkeleton>

      <StyledBoxesSkeleton className="wrapper flow-spacing-content rm-spacing-xl">
        <PlaceholderLoading shape="rect" width="100%" height="200" />
        <PlaceholderLoading shape="rect" width="100%" height="200" />
        <PlaceholderLoading shape="rect" width="100%" height="200" />
      </StyledBoxesSkeleton>

      <StyledImgWrapper>
        <PlaceholderLoading shape="rect" width="100%" height="100%" />
      </StyledImgWrapper>
    </StyledSection>
  );
};

// Styles
const StyledFlexSkeleton = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBoxesSkeleton = styled.div`
  display: flex;
  flex-direction: column;

  ${respondTo.xl`
      flex-direction: row;

      & > * + * {
          margin-left: 0.5rem;
      }
  `}
`;

export default InfoSkeleton;
