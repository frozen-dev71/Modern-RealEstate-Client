import PropTypes from 'prop-types';
import Header from '../../isolated/header/Header';
import Footer from '../../isolated/footer/Footer';
import Animations from '../../isolated/animations/Animations';

const Layout = ({ children, isHeaderLight }) => {
  return (
    <>
      <Header light={isHeaderLight} />

      {children}

      <Footer spacing='footer-spacing-top footer-spacing-bottom' />

      {/* Out of document flow */}
      <Animations />
    </>
  );
};

// Proptypes
Layout.propTypes = {
  children: PropTypes.element.isRequired,
  isHeaderLight: PropTypes.bool.isRequired,
};

export default Layout;
