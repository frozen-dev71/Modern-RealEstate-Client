import styled from "styled-components";
import { StyledH2, StyledH3 } from "../../styles/reusable/typography";
import Qualities from "../../components/isolated/qualities/Qualities";
import {
  qualityOne,
  qualityTwo,
  qualityThree,
} from "../../utils/qualitiesData";

const Content = () => {
  return (
    <section className="wrapper flow-spacing">
      <StyledH2>Our Vision</StyledH2>

      <Qualities values={qualityOne} />
      <Qualities values={qualityTwo} reverse />
      <Qualities values={qualityThree} />

      <StyledTextWrapper>
        <StyledH3 as="p">
        We want to win at what we do, and we do all we can to help our customers,
         agents and employees build wealth. We love to work with people who are passionate
          about working hard and also giving back to their communities in a big way.
        </StyledH3>
      </StyledTextWrapper>
    </section>
  );
};

// Styles
const StyledTextWrapper = styled.div`
  max-width: 62.5rem; // 1000px
  margin-inline: auto;

  p {
    text-align: center;
  }
`;

export default Content;
