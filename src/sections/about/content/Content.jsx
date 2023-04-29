import { motion } from 'framer-motion';
import { StyledH1 } from '../../../styles/reusable/typography';
import { useEntranceContext } from '../../../context/entranceContext';
import aboutMainImg from '../../../assets/images/about-main.jpg';
import { StyledWrapper, StyledParragraph, StyledSubText, StyledImg } from './styles';

const Content = () => {
  const { isEntranceActive } = useEntranceContext();

  const contentAnimations = {
    from: hideValue => ({
      y: hideValue,
    }),
    to: delayValue => ({
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.6,
        delay: delayValue,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className='flow-spacing'>
      <StyledWrapper className='wrapper flow-spacing-content'>
        <div>
          <motion.div initial={{ overflow: 'hidden' }}>
            <StyledSubText
              initial={() => contentAnimations.from(50)}
              animate={() => contentAnimations.to(isEntranceActive ? 4.8 : 0.6)}
              className='sub-title'
            >
             How Moderne born
            </StyledSubText>
          </motion.div>

          <motion.div initial={{ overflow: 'hidden' }}>
            <StyledH1
              initial={() => contentAnimations.from(100)}
              animate={() => contentAnimations.to(isEntranceActive ? 4.9 : 0.7)}
            >
              Our History
            </StyledH1>
          </motion.div>
        </div>

        <motion.div initial={{ overflow: 'hidden' }}>
          <StyledParragraph
            initial={() => contentAnimations.from(400)}
            animate={() => contentAnimations.to(isEntranceActive ? 5.3 : 1.1)}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere sit sit mattis risus
            purus cras neque, commodo vel. Dictum faucibus ut volutpat nullam massa tellus habitant
            ultricies. Elementum malesuada ipsum viverra vivamus facilisi varius. Iaculis purus
            ornare nullam tincidunt mauris quam urna ut libero. Urna egestas vulputate egestas
            ultricies fermentum, montes, id. Tempus sed praesent a donec turpis lorem quam non.
            Phasellus sed quam orci, accumsan, penatibus. Blandit viverra ornare ultrices et. Sed
            pharetra turpis pretium lacus, sed ut volutpat.
          </StyledParragraph>
        </motion.div>

        <motion.div initial={{ overflow: 'hidden' }}>
          <StyledParragraph
            initial={() => contentAnimations.from(400)}
            animate={() => contentAnimations.to(isEntranceActive ? 5.3 : 1.1)}
          >
            Dictum eget odio elit malesuada sed arcu at. Non magnis proin tellus sed fermentum quis
            cras praesent. Sollicitudin lacus sed ornare leo, libero ac viverra sit viverra. Massa
            mauris, hendrerit arcu malesuada pulvinar enim imperdiet augue at. Egestas id ante
            aliquam pellentesque. Ullamcorper pellentesque vitae diam sit vitae, massa purus. Amet,
            diam tortor nec magna ullamcorper turpis mauris at amet. Vitae magna eget nisi,
            malesuada sed quis lectus facilisi. Neque ante eu vel urna pretium. Tincidunt augue in
            sociis pulvinar amet sodales nibh aliquam. Leo dolor quis habitant a risus, dictum
            feugiat.
          </StyledParragraph>
        </motion.div>
      </StyledWrapper>

      <StyledImg src={aboutMainImg} alt='interior casa' />
    </section>
  );
};

export default Content;
