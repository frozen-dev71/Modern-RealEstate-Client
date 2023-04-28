import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../../../reusable/logo/Logo';
import homeImg from '../../../../assets/images/home-menu.png';
import aboutImg from '../../../../assets/images/about-menu.png';
import propertiesImg from '../../../../assets/images/properties.jpg';
import { StyledDesktopLink } from '../../../../styles/reusable/typography';
import {
  StyledWrapper,
  StyledMenuHeader,
  StyledCloseIcon,
  StyledButton,
  StyledNav,
  StyledUl,
  StyledLi,
  StyledProperties,
  StyledLine,
  StyledImgWrapper,
} from './styles';
import { useDesktopMenu } from './useDesktopMenu';
import { removeScrollbar, addScrollbar } from '../../../../utils/utilities';

const DesktopMenu = ({ setIsMenuOpen }) => {
  const [
    propertiesLinks,
    currentImg,
    homeLinkControls,
    aboutLinkControls,
    propertiesLinkControls,
    styledWrapperAnim,
    handleMouseEnter,
    handleMouseLeave,
  ] = useDesktopMenu();

  const handleClose = () => {
    setIsMenuOpen(false);

    // wait till menu is gone
    setTimeout(() => {
      addScrollbar();
    }, 600);
  };

  return (
    <StyledWrapper
      key='menu-desktop'
      initial={{ y: '-100vh' }}
      animate={() => styledWrapperAnim.to(0)}
      exit={() => styledWrapperAnim.exit('-100vh')}
      onAnimationStart={removeScrollbar}
    >
      <StyledMenuHeader className='wrapper'>
        <Logo type='light' />

        <StyledButton type='button' onClick={handleClose}>
          <StyledCloseIcon />
        </StyledButton>
      </StyledMenuHeader>

      <StyledNav className='wrapper'>
        <StyledUl>
          <StyledLi
            onMouseEnter={() => handleMouseEnter(homeLinkControls, 0)}
            onMouseLeave={() => handleMouseLeave(homeLinkControls)}
          >
            <StyledLine
              initial={false}
              animate={{
                width: currentImg === 0 ? '4.375rem' : 0,
                marginRight: currentImg === 0 ? '2.5rem' : 0,
              }}
            />
            <StyledDesktopLink to='/' onClick={() => setIsMenuOpen(false)}>
              <svg
                width='221'
                height='70'
                viewBox='0 0 221 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <motion.text
                  animate={homeLinkControls}
                  fill='rgba(255,255,255, 0)'
                  stroke='#ffff'
                  strokeWidth='1.5'
                >
                  <tspan x='-4' y='62.8'>
                    Home
                  </tspan>
                </motion.text>
              </svg>
            </StyledDesktopLink>
          </StyledLi>

          <StyledLi
            onMouseEnter={() => handleMouseEnter(aboutLinkControls, 1)}
            onMouseLeave={() => handleMouseLeave(aboutLinkControls)}
          >
            <StyledLine
              initial={false}
              animate={{
                width: currentImg === 1 ? '4.375rem' : 0,
                marginRight: currentImg === 1 ? '2.5rem' : 0,
              }}
            />
            <StyledDesktopLink to='/about' onClick={() => setIsMenuOpen(false)}>
              <svg
                width='591'
                height='70'
                viewBox='0 0 591 65'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <motion.text
                  animate={aboutLinkControls}
                  fill='rgba(255,255,255, 0)'
                  stroke='#ffff'
                  strokeWidth='1.5'
                >
                  <tspan x='-3' y='63.8'>
                    About Moderne
                  </tspan>
                </motion.text>
              </svg>
            </StyledDesktopLink>
          </StyledLi>

          <StyledLi
            onMouseEnter={() => handleMouseEnter(propertiesLinkControls, 2)}
            onMouseLeave={() => handleMouseLeave(propertiesLinkControls)}
          >
            <StyledLine
              initial={false}
              animate={{
                width: currentImg === 2 ? '4.375rem' : 0,
                marginRight: currentImg === 2 ? '2.5rem' : 0,
                marginBottom: '1rem',
              }}
            />
            <StyledDesktopLink to='/properties' onClick={() => setIsMenuOpen(false)}>
              <svg
                width='495'
                height='84'
                viewBox='0 0 490 84'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <motion.text
                  animate={propertiesLinkControls}
                  fill='rgba(255,255,255, 0)'
                  stroke='#ffff'
                  strokeWidth='1.5'
                >
                  <tspan x='-6' y='65.8'>
                    Properties
                  </tspan>
                </motion.text>
              </svg>
            </StyledDesktopLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>

      <StyledProperties className='wrapper'>
        <div className='properties'>
          <p>Properties :</p>
          {propertiesLinks.map(link => (
            <Link key={link.id} to={`/properties/${link.id}`} className='text-white'>
              {link.content}
            </Link>
          ))}
        </div>

        <p className='text-white'>&copy; ${new Date().getFullYear()} Moderne Real-Estate</p>
      </StyledProperties>

      <StyledImgWrapper>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImg === 0 ? 1 : 0 }}
          src={homeImg}
          alt='house'
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImg === 1 ? 1 : 0 }}
          src={aboutImg}
          alt='house'
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImg === 2 ? 1 : 0 }}
          src={propertiesImg}
          alt='house'
        />
      </StyledImgWrapper>
    </StyledWrapper>
  );
};

// Proptypes
DesktopMenu.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
};

export default DesktopMenu;
