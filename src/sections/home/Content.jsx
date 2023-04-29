import styled from 'styled-components';
import { StyledH2, StyledH3 } from '../../styles/reusable/typography';
import Qualities from '../../components/isolated/qualities/Qualities';
import { qualityOne, qualityTwo, qualityThree } from '../../utils/qualitiesData';

const Content = () => {
  return (
    <section className='wrapper flow-spacing'>
      <StyledH2>Our Vision</StyledH2>

      <Qualities values={qualityOne} />
      <Qualities values={qualityTwo} reverse />
      <Qualities values={qualityThree} />

      <StyledTextWrapper>
        <StyledH3 as='p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pellentesque tempor semper
          odio morbi vitae eget luctus metus.
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
