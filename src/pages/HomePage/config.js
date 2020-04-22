export const particleParams = (theme, matches) => {
  return {
    particles: {
      color: {
        value: theme.palette.text.secondary,
      },
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 100,
        },
      },
      line_linked: {
        enable: true,
        opacity: 0.02,
      },
      move: {
        direction: 'right',
        speed: 0.15,
      },
      size: {
        value: 1,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
    },
    retina_detect: true,
  };
};
