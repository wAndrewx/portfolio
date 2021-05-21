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
    myDark: '#101010',
    myLight: '#FFFBE8',
    highlight: '#ED254E',
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
      body: {
        color: mode('myDark', 'myLight')(props),
        bg: mode('myLight', 'myDark')(props),
        css: {
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: mode('myLight', 'myDark')(props),
            borderRadius: '24px',
          },
        },
      },
    }),
  },
});
