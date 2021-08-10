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
    image: './images/pomodomo.png',
    link: 'https://www.pomodomo.ca',
    projectGithubLink: 'https://github.com/khoaHyh/pomodomo',
  },
  {
    id: '2',
    title: 'Portfolio',
    description:
      'This was a project to display my other projects. It was designed in Figma by me (Andrew Huynh) and was intended to be minimal. This app gave me a better understanding to responsive UI designing, styling and an alternative way to learn CSS.',
    tags: ['Javascript', 'React', 'ChakraUI', 'Figma'],
    image: './images/port.png',
    link: 'https://www.andrewhuynh.ca',
    projectGithubLink: 'https://github.com/wAndrewx/portfolio',
  },
  {
    id: '3',
    title: 'Fullstack Twitter Mock App',
    description:
      'This was my take on how twitter would be implemented with Express utilising various protocols such as HTTP, and Websockets stored on a NoSQL database. The app leveraged websockets to get live tweets, and a RESTFUL api for multiple resources. Working and developing this app solidified my fundamental understanding in protocols and security for web developing ',
    tags: [
      'Javascript',
      'React',
      'NodeJS',
      'Express',
      'MongoDB',
      'Mongoose',
      'SocketIO',
    ],
    image: '',
    link: '',
    projectGithubLink: 'https://github.com/wAndrewx/kebab-api',
  },
  {
    id: '4',
    title: 'Object Manager',
    description:
      'This was a school project and considered the hardest project where I earned full marks. The application was a mock memory manager that used linked lists, and had an implementation of a garbarge collector with the double buffering method. This project was challenging since this was a test of cumalitive knowledge on the whole course condensed into one project.',
    tags: ['C', 'LLDB'],
    image: '',
    link: '',
    projectGithubLink: '',
  },
];
