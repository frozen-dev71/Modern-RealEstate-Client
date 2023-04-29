import { motion } from "framer-motion";
import Error from "../../../components/reusable/error/Error";
import InfoSkeleton from "./infoSkeleton/InfoSkeleton";
import { useSinglePropertie } from "../../../api/useSinglePropertie";
import { useEntranceContext } from "../../../context/entranceContext";
import {
  StyledSection,
  StyledTitleWrapper,
  StyledFlexWrapper,
  StyledBox,
  StyledImgWrapper,
} from "./styles";
import { StyledH1, StyledInfo } from "../../../styles/reusable/typography";
import { textAnimations, boxWrapperAnimations } from "./animations";

const Info = () => {
  const { isLoading, error, singlePropertie } = useSinglePropertie();
  const { isEntranceActive } = useEntranceContext();

  if (isLoading) {
    return <InfoSkeleton />;
  }

  if (error) {
    return (
      <section>
        <Error />
      </section>
    );
  }

  return (
    <StyledSection>
      <StyledTitleWrapper className="wrapper">
        <motion.div initial={{ overflow: "hidden" }}>
          <StyledH1
            initial={textAnimations.from}
            animate={() => textAnimations.to(isEntranceActive, 4.4)}
          >
            {singlePropertie[0].title}
          </StyledH1>
        </motion.div>

        <motion.div initial={{ overflow: "hidden" }}>
          <StyledInfo
            initial={textAnimations.from}
            animate={() => textAnimations.to(isEntranceActive, 4.5)}
          >
            {singlePropertie[0].direction}
          </StyledInfo>
        </motion.div>
      </StyledTitleWrapper>

      <motion.div initial={{ overflow: "hidden" }}>
        <StyledFlexWrapper
          initial={() => boxWrapperAnimations.from(window.innerWidth)}
          animate={() => boxWrapperAnimations.to(isEntranceActive, 5)}
          className="wrapper flow-spacing-content rm-spacing-xl"
        >
          <StyledBox>
            <p>Direction</p>
            <StyledInfo>{singlePropertie[0].direction}</StyledInfo>
          </StyledBox>

          <StyledBox borders>
            <p>Year</p>
            <StyledInfo>{singlePropertie[0].year}</StyledInfo>
          </StyledBox>

          <StyledBox>
            <p>Rooms</p>
            <StyledInfo>{singlePropertie[0].rooms}</StyledInfo>
          </StyledBox>
        </StyledFlexWrapper>
      </motion.div>

      <StyledImgWrapper>
        <motion.img
          initial={{
            y: 200,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
              ease: "easeOut",
              type: "tween",
            },
          }}
          viewport={{ once: true, amount: "some" }}
          src={singlePropertie[0].img}
          alt="propiedad"
        />
      </StyledImgWrapper>
    </StyledSection>
  );
};

export default Info;
