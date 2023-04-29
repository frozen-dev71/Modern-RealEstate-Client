import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const Head = ({ title, description }) => {
  return (
    <Helmet>
      <title>Moderne | {title}</title>
      <meta name='description' content={description} />
    </Helmet>
  );
};

// Proptypes
Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Head;
