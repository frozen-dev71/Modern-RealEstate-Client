import PropTypes from 'prop-types';
import { StyledH2, StyledBoxText } from '../../../styles/reusable/typography';
import { StyledWrapper, StyledBox, StyledImgWrapper } from './styles';

const Navigation = ({ boxOneValues, boxTwoValues }) => {
  const { title, text, imgSrc, pathTo } = boxOneValues;
  const {
    title: titleBoxTwo,
    text: textBoxTwo,
    imgSrc: imgSrcBoxTwo,
    pathTo: pathBoxTwo,
  } = boxTwoValues;

  return (
    <section>
      <StyledWrapper>
        <StyledBox to={pathTo}>
          <StyledBoxText>{text}</StyledBoxText>
          <StyledH2 light>{title}</StyledH2>
          <StyledImgWrapper className='img'>
            <img src={imgSrc} alt={title} />
          </StyledImgWrapper>
        </StyledBox>

        <StyledBox to={pathBoxTwo}>
          <StyledBoxText>{textBoxTwo}</StyledBoxText>
          <StyledH2 light>{titleBoxTwo}</StyledH2>
          <StyledImgWrapper className='img'>
            <img src={imgSrcBoxTwo} alt={titleBoxTwo} />
          </StyledImgWrapper>
        </StyledBox>
      </StyledWrapper>
    </section>
  );
};

// Proptypes
Navigation.propTypes = {
  boxOneValues: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    imgSrc: PropTypes.string,
    pathTo: PropTypes.string,
  }).isRequired,
  boxTwoValues: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    imgSrc: PropTypes.string,
    pathTo: PropTypes.string,
  }).isRequired,
};

export default Navigation;
