import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { StyledButton, StyledArrowWrapper, StyledArrowIcon } from "./styles";

const Button = ({ white, path, text }) => {
  const navigate = useNavigate();
  const arrowControls = useAnimation();
  const arrowTwoControls = useAnimation();
  const circleControls = useAnimation();

  const animateArrowIcon = async (
    pathLengthCircle,
    arrowMoveVal,
    arrowTwoMoveVal
  ) => {
    await Promise.all([
      circleControls.start({
        transition: { duration: 0.5, ease: "easeOut", type: "tween" },
        pathLength: pathLengthCircle,
      }),
      arrowControls.start({
        transition: { duration: 0.5, ease: "easeOut", type: "tween" },
        y: arrowMoveVal,
      }),
      arrowTwoControls.start({
        transition: { duration: 0.5, ease: "easeOut", type: "tween" },
        y: arrowTwoMoveVal,
      }),
    ]);
  };

  return (
    <StyledButton
      white={white}
      type="button"
      onClick={() => navigate(path)}
      onMouseEnter={() => animateArrowIcon(1, 60, 0)}
      onMouseLeave={() => animateArrowIcon(0, 0, -60)}
    >
      <StyledArrowWrapper>
        <StyledArrowIcon
          viewBox="0 0 69 69"
          xmlns="http://www.w3.org/2000/svg"
          white={white}
        >
          <motion.path
            animate={arrowControls}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34 22C34.2357 22 34.4618 22.0941 34.6285 22.2615C34.7951 22.4289 34.8888 22.656 34.8888 22.8928V43.9504L40.4809 38.3311C40.6478 38.1635 40.8741 38.0693 41.1101 38.0693C41.3461 38.0693 41.5725 38.1635 41.7394 38.3311C41.9062 38.4987 42 38.7261 42 38.9632C42 39.2003 41.9062 39.4277 41.7394 39.5953L34.6292 46.7377C34.5467 46.8209 34.4486 46.8868 34.3406 46.9318C34.2327 46.9768 34.1169 47 34 47C33.8831 47 33.7673 46.9768 33.6594 46.9318C33.5514 46.8868 33.4533 46.8209 33.3708 46.7377L26.2606 39.5953C26.0938 39.4277 26 39.2003 26 38.9632C26 38.7261 26.0938 38.4987 26.2606 38.3311C26.4275 38.1635 26.6539 38.0693 26.8899 38.0693C27.1259 38.0693 27.3522 38.1635 27.5191 38.3311L33.1112 43.9504V22.8928C33.1112 22.656 33.2049 22.4289 33.3715 22.2615C33.5382 22.0941 33.7643 22 34 22V22Z"
          />
          <motion.path
            initial={{ y: -50 }}
            animate={arrowTwoControls}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34 22C34.2357 22 34.4618 22.0941 34.6285 22.2615C34.7951 22.4289 34.8888 22.656 34.8888 22.8928V43.9504L40.4809 38.3311C40.6478 38.1635 40.8741 38.0693 41.1101 38.0693C41.3461 38.0693 41.5725 38.1635 41.7394 38.3311C41.9062 38.4987 42 38.7261 42 38.9632C42 39.2003 41.9062 39.4277 41.7394 39.5953L34.6292 46.7377C34.5467 46.8209 34.4486 46.8868 34.3406 46.9318C34.2327 46.9768 34.1169 47 34 47C33.8831 47 33.7673 46.9768 33.6594 46.9318C33.5514 46.8868 33.4533 46.8209 33.3708 46.7377L26.2606 39.5953C26.0938 39.4277 26 39.2003 26 38.9632C26 38.7261 26.0938 38.4987 26.2606 38.3311C26.4275 38.1635 26.6539 38.0693 26.8899 38.0693C27.1259 38.0693 27.3522 38.1635 27.5191 38.3311L33.1112 43.9504V22.8928C33.1112 22.656 33.2049 22.4289 33.3715 22.2615C33.5382 22.0941 33.7643 22 34 22V22Z"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={circleControls}
            d="M0.75,34.5a33.75,33.75 0 1,0 67.5,0a33.75,33.75 0 1,0 -67.5,0"
            className="circlePath"
          />
        </StyledArrowIcon>
      </StyledArrowWrapper>

      <span className="text-semibold content">{text}</span>
    </StyledButton>
  );
};

// Proptypes
Button.propTypes = {
  white: PropTypes.bool,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  white: false,
};

export default Button;
