import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from './components/buttonStyles';
import { mode } from '@chakra-ui/theme-tools';
// import customStyle as chakraStyle from src

const config = {
  initialColorMode: 'light',
};

export const andrewTheme = extendTheme({
  colors: {
    myDark: '#101010',
    myLight: '#FFFFFF',
    // highlight: '#A71734',
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
      body: {
        color: mode('myDark', 'myLight')(props),
        bg: mode('myLight', 'myDark')(props),
      },
    }),
  },
});
