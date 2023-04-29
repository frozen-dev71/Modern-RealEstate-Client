import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { usePropertiesData } from "../../../api/usePropertiesData";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

export const usePropertiesMap = () => {
  const { isLoading, error, propertiesData } = usePropertiesData();
  const [properties, setProperties] = useState([]);

  const animationControls = {
    map: useAnimation(),
    overlay: useAnimation(),
    title: useAnimation(),
    closeBtn: useAnimation(),
  };

  const { width } = useWindowDimensions();
  const zoomLevel = width < 500 ? 12 : 14;
  const headerHeight = width < 500 ? 88 : 113;
  const mapHeight = width < 500 ? 200 : 350;

  // Populate state with propertiesData coordinates
  useEffect(() => {
    if (isLoading) return;

    const propertiesCoordinates = propertiesData.map((propertie) => ({
      id: propertie.id,
      content: propertie.title,
      coordinates: propertie.coordinates,
    }));

    setProperties(propertiesCoordinates);
  }, [propertiesData, isLoading]);

  const toggleMapAnim = async (open) => {
    await Promise.all([
      animationControls.closeBtn.start({
        y: open ? 0 : "-45px",
        transition: {
          type: "tween",
          duration: 0.5,
          ease: "easeOut",
        },
      }),

      animationControls.map.start({
        height: open ? `calc(100vh - ${headerHeight}px)` : `${mapHeight}px`,
        transition: {
          type: "tween",
          duration: 0.5,
        },
      }),

      animationControls.overlay.start({
        opacity: open ? 0 : 1,
        pointerEvents: open ? "none" : "auto",
        transition: {
          type: "tween",
          duration: 0.5,
        },
      }),

      animationControls.title.start({
        opacity: open ? 0 : 1,
        transition: {
          type: "tween",
          duration: 0.5,
        },
      }),
    ]);
  };

  return {
    isLoading,
    error,
    properties,
    animationControls,
    toggleMapAnim,
    zoomLevel,
  };
};
