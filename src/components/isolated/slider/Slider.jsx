import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import PlaceholderLoading from 'react-placeholder-loading';
import arrowSvg from '../../../assets/images/arrow-down-icon.svg';
import { useInterval } from '../../../hooks/useInterval';
import { usePropertiesImages } from '../../../api/usePropertiesImages';
import { useEntranceContext } from '../../../context/entranceContext';
import {
  StyledWrapper,
  StyledLinkImg,
  StyledLinkBox,
  StyledDotsWrapper,
  StyledContentWrapper,
  StyledArrowWrapper,
  StyledLink,
} from './styles';

const Slider = () => {
  const [delaySliderAnim, setDelaySliderAnim] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);
  const [currentPath, setCurrentPath] = useState(1);
  const { isLoading, propertiesImages } = usePropertiesImages();
  const { isEntranceActive } = useEntranceContext();
  const arrowControls = useAnimation();
  const dots = [0, 1, 2, 3, 4];

  // Update paths
  useEffect(() => {
    setCurrentPath(currentImg + 1);
  }, [currentImg]);

  // Delay slider start till transition finish
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelaySliderAnim(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Update img src
  useInterval(() => {
    if (delaySliderAnim) return;

    if (currentImg === propertiesImages.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  }, 5000);

  const updateImgDots = index => {
    setCurrentImg(index);
  };

  return (
    <StyledWrapper
      initial={{ y: -60, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: isEntranceActive ? 5.6 : 1.5,
          type: 'tween',
          ease: 'easeOut',
          duration: 0.6,
        },
      }}
    >
      <StyledDotsWrapper>
        {dots.map((dot, index) => (
          <motion.button
            animate={{
              scale: dot === currentImg ? 1.5 : 1,
              transition: {
                duration: 0.3,
              },
            }}
            type='button'
            key={dot}
            onClick={() => updateImgDots(index)}
          />
        ))}
      </StyledDotsWrapper>

      <StyledContentWrapper>
        <StyledLinkImg to={`/properties/${currentPath}`}>
          {isLoading ? (
            <PlaceholderLoading shape='rect' width='100%' height='100%' />
          ) : (
            <AnimatePresence exitBeforeEnter>
              <motion.img
                initial={{ opacity: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                key={propertiesImages[currentImg].id}
                src={propertiesImages[currentImg].img}
                alt='property'
              />
            </AnimatePresence>
          )}
        </StyledLinkImg>

        <StyledLinkBox>
          <StyledLink
            to='/properties'
            onMouseEnter={() =>
              arrowControls.start({
                x: 10,
              })
            }
            onMouseLeave={() =>
              arrowControls.start({
                x: 0,
              })
            }
          >
            <span>Propiedades</span>

            <StyledArrowWrapper animate={arrowControls}>
              <img src={arrowSvg} alt='flecha' />
            </StyledArrowWrapper>
          </StyledLink>
        </StyledLinkBox>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default Slider;
