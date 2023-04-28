import { NavLink, useLocation } from 'react-router-dom';
import { StyledFixedWrapper, StyledNav, StyledLi } from './styles';
import { fixedWrapperAnimations, navAnimations, liAnimations } from './animations';
import { removeScrollbar } from '../../../../utils/utilities';

const MobileMenu = () => {
  const location = useLocation();

  return (
    <StyledFixedWrapper
      initial={fixedWrapperAnimations.from}
      animate={fixedWrapperAnimations.to}
      exit={fixedWrapperAnimations.out}
      key='mobile-menu'
      onAnimationStart={removeScrollbar}
    >
      <StyledNav className='wrapper' variants={navAnimations} animate='to'>
        <StyledLi initial={liAnimations.from} variants={liAnimations}>
          <NavLink
            className={linkRoute =>
              linkRoute.isActive && !location.hash ? 'mobile-link active-link' : 'mobile-link'
            }
            to='/'
          >
            Home
          </NavLink>
        </StyledLi>

        <StyledLi initial={liAnimations.from} variants={liAnimations}>
          <NavLink
            className={linkRoute =>
              linkRoute.isActive && !location.hash ? 'mobile-link active-link' : 'mobile-link'
            }
            to='/about'
          >
            About Moderne
          </NavLink>
        </StyledLi>

        <StyledLi initial={liAnimations.from} variants={liAnimations}>
          <NavLink
            className={linkRoute =>
              linkRoute.isActive && !location.hash ? 'mobile-link active-link' : 'mobile-link'
            }
            to='/propiedades'
          >
            Properties
          </NavLink>
        </StyledLi>
      </StyledNav>
    </StyledFixedWrapper>
  );
};

export default MobileMenu;
