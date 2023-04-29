import { useLayoutEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Entrance from "./entrance/Entrance";
import TransitionMount from "./transitionMount/TransitionMount";
import TransitionUnmount from "./transitionUnmount/TransitionUnmount";
import { useEntranceContext } from "../../../context/entranceContext";
import { removeScrollbar, addScrollbar } from "../../../utils/utilities";

const Animations = () => {
  const { isEntranceActive } = useEntranceContext();

  // Remove scroll if entrance is active
  useLayoutEffect(() => {
    if (!isEntranceActive) return;

    // remove scroll
    removeScrollbar();
  }, [isEntranceActive]);

  return (
    <>
      <AnimatePresence onExitComplete={addScrollbar}>
        {isEntranceActive ? <Entrance /> : null}
      </AnimatePresence>

      <TransitionMount isEntranceActive={isEntranceActive} />
      <TransitionUnmount />
    </>
  );
};

export default Animations;
