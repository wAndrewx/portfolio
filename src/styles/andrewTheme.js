import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from './components/buttonStyles';
import { mode } from '@chakra-ui/theme-tools';
// import customStyle as chakraStyle from src

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export const andrewTheme = extendTheme({
  colors: {
    myDark: '#1D1D1D',
    myLight: '#ECE8D8',
    highlight: '#F9AB37',
    tertiary: '#ED254E',
  },
  fonts: {
    heading: 'Kollektif-Bold',
    body: 'Kollektif',
  },
  components: {
    Button,
  },
  styles: {
    global: props => ({
      'body': {
        color: mode('myDark', 'myLight')(props),
        bg: mode('myLight', 'myDark')(props),
        
      },
    }),
  },
});
