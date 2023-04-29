import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import useScrollbarSize from 'react-scrollbar-size';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Properties from './routes/properties/Properties';
import SingleProperty from './routes/singleProperty/SingleProperty';
import NotFound from './routes/404/NotFound';
import GlobalStyles from './styles/globalStyles';
import ScrollToTop from './components/isolated/scrollToTop/ScrollToTop';

function App() {
  // Get scrollbarWidth of current browser
  const { width } = useScrollbarSize();
  const location = useLocation();

  // set css variable with browser scrollbar width & calculate space
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      `calc(${width}px - (100vw - 100%))`
    );
  }, [width]);

  return (
    <>
      <GlobalStyles />

      <ScrollToTop>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/properties' element={<Properties />} />
            <Route path='/properties/:id' element={<SingleProperty />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </ScrollToTop>
    </>
  );
}

export default App;
