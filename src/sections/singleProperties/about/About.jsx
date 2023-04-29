import { motion, useAnimation } from "framer-motion";
import AboutSkeleton from "./aboutSkeleton/AboutSkeleton";
import Error from "../../../components/reusable/error/Error";
import { StyledH2 } from "../../../styles/reusable/typography";
import { useSinglePropertie } from "../../../api/useSinglePropertie";
import { StyledSection } from "./styles";

const About = () => {
  const { isLoading, error, singlePropertie } = useSinglePropertie();
  const currentWidth = window.innerWidth;
  const animationControls = {
    title: useAnimation(),
    textOne: useAnimation(),
    textTwo: useAnimation(),
  };

  const animateAbout = async () => {
    await Promise.all([
      animationControls.title.start({
        y: 0,
        transition: {
          duration: 0.7,
          ease: "easeOut",
          type: "tween",
        },
      }),

      animationControls.textOne.start({
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          type: "tween",
        },
      }),

      animationControls.textTwo.start({
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          type: "tween",
        },
      }),
    ]);
  };

  if (isLoading) {
    return <AboutSkeleton />;
  }

  if (error) {
    return (
      <section>
        <Error />
      </section>
    );
  }

  return (
    <StyledSection className="wrapper flow-spacing-content rm-spacing-xl">
      <motion.div initial={{ overflow: "hidden", alignSelf: "start" }}>
        <StyledH2
          initial={{ display: "inline-block", y: -60 }}
          animate={animationControls.title}
        >
          About Property
        </StyledH2>
      </motion.div>

      <motion.div className="flow-spacing-content">
        <motion.div
          initial={{ overflow: "hidden" }}
          whileInView={currentWidth < 1024 ? animateAbout : null}
          viewport={{ once: "true" }}
        >
          <motion.p
            initial={{ y: 600 }}
            animate={animationControls.textOne}
            className="max-width-700"
          >
            {singlePropertie[0].information[0]}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ overflow: "hidden" }}
          whileInView={currentWidth >= 1024 ? animateAbout : null}
          viewport={{ once: "true" }}
        >
          <motion.p
            initial={{ y: 600 }}
            animate={animationControls.textTwo}
            className="max-width-700"
          >
            {singlePropertie[0].information[1]}
          </motion.p>
        </motion.div>
      </motion.div>
    </StyledSection>
  );
};

export default About;
