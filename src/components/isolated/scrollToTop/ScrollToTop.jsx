/* eslint-disable react/jsx-no-useless-fragment */
import PropTypes from 'prop-types';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Execute after the transition cover the screen
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  return <>{children}</>;
};

// Proptypes
ScrollToTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ScrollToTop;
