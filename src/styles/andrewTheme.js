import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from './components/buttonStyles';
// import customStyle as chakraStyle from src

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const andrewTheme = extendTheme({
  colors: {
    myDark: '#1D1D1D',
    myLight: '#ECE8D8',
    highlight: '#F9AB37',
    tertiary: '#B23A48',
  },
  fonts: {
    heading: 'Kollektif-Bold',
    body: 'Kollektif',
  },
  components: {
    Button,
  },config
});
