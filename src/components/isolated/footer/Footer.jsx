import PropTypes from 'prop-types';
import Logo from '../../reusable/logo/Logo';
import { StyledH3 } from '../../../styles/reusable/typography';
import { StyledScrollButton } from '../../../styles/reusable/button';
import { StyledGrid, StyledFlexWrapper, StyledContent } from './styles';

const Footer = ({ spacing }) => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className={`wrapper ${spacing}`}>
      <StyledGrid className='flow-spacing-content rm-spacing-xl'>
        <StyledContent gridArea='title'>
          <Logo type='dark' />
          <p className='max-width-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit eu nunc, sagittis
            scelerisque lacus risus sed gravida.
          </p>
        </StyledContent>

        <StyledContent gridArea='schedule'>
          <StyledH3 regular>Working Hours</StyledH3>
          <div>
            <p>Mon-Fri 8:00a.m - 17:00p.m</p>
            <p>Meetings only by appointment.</p>
          </div>
        </StyledContent>

        <StyledContent gridArea='direction'>
          <StyledH3 regular>Direction</StyledH3>
          <p>807 St Margarets Dr.Bronx, NY 10468</p>
        </StyledContent>

        <StyledFlexWrapper gridArea='copyright'>
          <p>&copy; {new Date().getFullYear()} Moderne Real-Estate - All rights reserved.</p>
          <StyledScrollButton onClick={toTop}>Go Top</StyledScrollButton>
        </StyledFlexWrapper>
      </StyledGrid>
    </footer>
  );
};

// Proptypes
Footer.propTypes = {
  spacing: PropTypes.string,
};

Footer.defaultProps = {
  spacing: '',
};

export default Footer;
