module.exports = {
  siteTitle: 'Edwin Zamudio | Software Engineer',
  siteDescription:
    'Edwin Zamudio is a future software engineer based in Chicago,Il.',
  siteKeywords:
    'Edwin Zamudio, Edwin, Zamudio, notedwin, ezfire, software engineer, front-end engineer, web developer, javascript, illinois tech, illinois, tech, computers, hacker, dev, developer, engineering, fire, ezfire',
  siteUrl: 'https://ezfire.com',
  siteLanguage: 'en_US',
  //googleAnalyticsID: 'UA-45666519-2',//chanfe
  //googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Edwin Zamudio',
  location: 'Chicago,Ill',
  email: 'ezamudio@hawk.iit.edu',
  github: 'https://github.com/notedwin',
  twitterHandle: '@ed_13',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/notedwin',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/edwin-zamudio',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/edwin.aiv',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ed_13',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    /*{
      name: 'Experience',
      url: '/#jobs',
    },*/
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'Blog',
      url: '/Blog'
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#333333',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 300) => ({
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
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
