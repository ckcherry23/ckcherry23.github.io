module.exports = {
  email: 'charisma.kausar@u.nus.edu',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ckcherry23',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/charisma-kausar',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@charismakausar',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@CharismaKausar',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ckcherry23',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Blog',
      url: '/#blog',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    rose: '#eeaaaa',
    navy: '#171717',
    darkNavy: '#0d0d0d',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
