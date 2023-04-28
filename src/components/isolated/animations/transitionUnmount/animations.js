const exitRouteAnimWrapper = {
	exit: () => ({
	  transition: {
		staggerChildren: 0.1,
	  },
	}),
  };
  
  const exitRouteAnimBlock = {
	exit: () => ({
	  width: '100%',
	  transition: {
		duration: 0.6,
		type: 'tween',
		ease: 'easeOut',
	  },
	}),
  };
  
  export { exitRouteAnimWrapper, exitRouteAnimBlock };
  