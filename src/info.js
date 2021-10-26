export const projects = [
  {
    id: '1',
    title: 'Pomodoro App',
    description:
      "The Pomodoro app is a full stack web application which features a time management method called Pomodoro Technique. The app allows users to sign up and login to see their user data ie.(how many times they've done the technique). The app was a joint project using modern technologies such as NextJS, this lead to faster load times, better SEO scores and faster development time. These modern libraries and frameworks helped me develop better programming practices and improved my skills to adapt to a new environment.",
    tags: [
      'Javascript',
      'React (Next.js)',
      'ChakraUI',
      'NodeJS',
      'Express',
      'PostgreSQL',
    ],
    image: '../../images/pomodomo.png',
    link: 'https://www.pomodomo.ca',
    projectGithubLink: 'https://github.com/khoaHyh/pomodomo',
  },
  {
    id: '2',
    title: 'Coin Balance',
    description:
      "Coin balance is a PERN stack app which displays current market data on coins using MetaMask and EthPlorer's API. The front end is built using NextJS and the backend was built using an Express app. Info was stored on PostgresSQL and is hosted on EC2 instances",
    tags: [
      'Typescript',
      'NextJS',
      'PostgresSQL',
      'ExpressJS',
      'NodeJS',
      'AWS EC2',
      'PM2',
    ],
    image: '../../images/coinbalance.png',
    link: 'coin-balance.vercel.app',
    projectGithubLink: 'https://github.com/wAndrewx/coin-wallet-data-server',
  },
  {
    id: '3',
    title: 'Fullstack Twitter Mock App',
    description:
      'This was my take on how handling tweets and authentication would be implemented with Express, and storing tweets and user data on a NoSQL database. The app used Serverless framework to launch on AWS Lambda so I could utilised FaaS. Developing this app gave me an understanding on system design and further knowledge on security. ',
    tags: [
      'Serverless',
      'AWS',
      'Express',
      'NodeJS',
      'React',
      'MongoDB',
      'Mongoose',
      'Javascript',
    ],
    image: '../../images/twitter-mock.jpg',
    link: 'https://twittermock.netlify.app/',
    projectGithubLink: 'https://github.com/wAndrewx/kebab-api',
  },
  {
    id: '4',
    title: 'Portfolio',
    description:
      'This was a project to display my other projects. It was designed in Figma by me (Andrew Huynh) and was intended to be minimal. This app gave me a better understanding to responsive UI designing, styling and an alternative way to learn CSS.',
    tags: ['Javascript', 'React', 'ChakraUI', 'Figma'],
    image: '../../images/port.png',
    link: 'https://www.andrewhuynh.ca',
    projectGithubLink: 'https://github.com/wAndrewx/portfolio',
  },
];

export const description =
  'I am a developer based in Toronto, Canada, who is currently a student ' +
  'majoring in Computer Science. ' +
  'I have a many interests which include, male fashion, cryptocurrency, political philosophy, gaming, weightlifting (pre covid) and building keyboards.';
