import { motion } from 'framer-motion';
import styled from 'styled-components';
import bgImage from '../../assets/images/bg.jpg';
import { StyledH1 } from '../../styles/reusable/typography';
import Button from '../../components/reusable/btn/Button';
import Slider from '../../components/isolated/slider/Slider';
import { useEntranceContext } from '../../context/entranceContext';

const Hero = () => {
  const { isEntranceActive } = useEntranceContext();
  const titleAnimations = {
    from: hideValue => ({
      y: hideValue,
    }),
    to: delay => ({
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.7,
        ease: 'easeOut',
        delay,
      },
    }),
  };

  return (
    <StyledBgImgWrapper>
      <StyledContent className='wrapper flow-spacing-content'>
        <motion.div initial={{ overflow: 'hidden' }}>
          <StyledH1
            light
            className='max-width-500'
            initial={() => titleAnimations.from(200)}
            animate={() => titleAnimations.to(isEntranceActive ? 4.9 : 0.8)}
          >
           Innovation and Technology
          </StyledH1>
        </motion.div>

        <motion.div initial={{ overflow: 'hidden' }}>
          <motion.p
            className='text-white max-width-500'
            initial={() => titleAnimations.from(400)}
            animate={() => titleAnimations.to(isEntranceActive ? 4.8 : 0.7)}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, molestie et egestas
            rhoncus volutpat adipiscing. Dui in varius elit orci et luctus aliquam maecenas. Amet,
            aliquam et aliquet condimentum quis enim.
          </motion.p>
        </motion.div>

        <motion.div initial={{ overflow: 'hidden' }}>
          <motion.div
            initial={() => titleAnimations.from(300)}
            animate={() => titleAnimations.to(isEntranceActive ? 4.7 : 0.6)}
          >
            <Button white path='/about' text='Discover More' />
          </motion.div>
        </motion.div>
      </StyledContent>

      <Slider />
    </StyledBgImgWrapper>
  );
};

// Styles
const StyledBgImgWrapper = styled.section`
  position: relative;
  background: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(var(--clr-dark-value), 0.4);
  }
`;

const StyledContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  padding-top: 8rem; // 128px
  padding-bottom: 2.5rem; // 40px
`;

export default Hero;
