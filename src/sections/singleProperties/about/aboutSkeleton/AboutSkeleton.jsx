import PlaceholderLoading from "react-placeholder-loading";
import { StyledSection } from "../styles";

const AboutSkeleton = () => {
  return (
    <StyledSection className="wrapper flow-spacing-content rm-spacing-xl">
      <div className="max-width-250">
        <PlaceholderLoading shape="rect" width="100%" height="40" />
      </div>

      <div className="flow-spacing-content">
        <PlaceholderLoading shape="rect" width="100%" height="300" />
        <PlaceholderLoading shape="rect" width="100%" height="300" />
      </div>
    </StyledSection>
  );
};

export default AboutSkeleton;
