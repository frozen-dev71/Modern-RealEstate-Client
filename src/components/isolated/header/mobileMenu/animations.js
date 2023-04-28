const fixedWrapperAnimations = {
	from: () => ({
	  x: '-100vh',
	}),
	to: () => ({
	  x: 0,
	  transition: { duration: 0.5, ease: 'linear', type: 'tween' },
	}),
	out: () => ({
	  x: '-100vh',
	  transition: { duration: 0.8, ease: 'easeInOut', type: 'tween' },
	}),
  };
  
  const navAnimations = {
	to: () => ({
	  transition: {
		duration: 0.5,
		ease: 'linear',
		type: 'tween',
		staggerChildren: 0.2,
		delayChildren: 0.5,
	  },
	}),
  };
  
  const liAnimations = {
	from: () => ({
	  scale: 0,
	  opacity: 0,
	}),
	to: () => ({
	  scale: 1,
	  opacity: 1,
	  transition: {
		duration: 0.4,
		ease: 'linear',
		type: 'spring',
		mass: 0.7,
	  },
	}),
  };
  
  export { fixedWrapperAnimations, navAnimations, liAnimations };
  