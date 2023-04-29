import { useState } from "react";
import { useAnimation } from "framer-motion";

export const useDesktopMenu = () => {
  const [currentImg, setCurrentImg] = useState(null);
  const homeLinkControls = useAnimation();
  const aboutLinkControls = useAnimation();
  const propertiesLinkControls = useAnimation();

  const propertiesLinks = [
    { content: "Moderne I", id: 1 },
    { content: "Moderne II", id: 2 },
    { content: "Moderne III", id: 3 },
    { content: "Moderne IV", id: 4 },
    { content: "Moderne V", id: 5 },
  ];

  // Animations
  const animateText = (stroke, fill, ease) => ({
    fill,
    stroke,
    transition: {
      ease,
      duration: 0.2,
      type: "tween",
    },
  });

  const styledWrapperAnim = {
    to: (value) => ({
      y: value,
      transition: {
        type: "spring",
        bounce: 0,
        ease: "easeInOut",
        duration: 0.6,
      },
    }),
    exit: (value) => ({
      y: value,
      transition: {
        type: "spring",
        bounce: 0,
        ease: "easeInOut",
        duration: 0.6,
      },
    }),
  };

  // Events
  const handleMouseEnter = async (controls, imgIndex) => {
    // Make image visible
    setCurrentImg(imgIndex);

    await controls.start(
      animateText("rgba(255,255,255, 0)", "#ffff", "easeIn")
    );
  };

  const handleMouseLeave = async (controls) => {
    // Hide image
    setCurrentImg(null);

    await controls.start(
      animateText("#ffff", "rgba(255,255,255, 0)", "easeOut")
    );
  };

  return [
    propertiesLinks,
    currentImg,
    homeLinkControls,
    aboutLinkControls,
    propertiesLinkControls,
    styledWrapperAnim,
    handleMouseEnter,
    handleMouseLeave,
  ];
};
