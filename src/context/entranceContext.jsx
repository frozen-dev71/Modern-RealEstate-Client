/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Context
const EntranceContext = createContext();

// Export context
export const useEntranceContext = () => useContext(EntranceContext);

// Provider
const EntranceProvider = ({ children }) => {
  const [isEntranceActive, setIsEntranceActive] = useState(true);

  return (
    <EntranceContext.Provider value={{ isEntranceActive, setIsEntranceActive }}>
      {children}
    </EntranceContext.Provider>
  );
};

// Proptypes
EntranceProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default EntranceProvider;
