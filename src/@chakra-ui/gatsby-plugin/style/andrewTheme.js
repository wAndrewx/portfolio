import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from './components/buttonStyles';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
};

export const andrewTheme = extendTheme({
  config,
  colors: {
    myDark: '#080808',
    myLight: '#FFFFFF',
    myDark2: '#121212',
    highlight: '#5b0e96',
  },
  fonts: {
    heading: `'Kollektif-Bold'`,
    body: `'Kollektif'`,
  },
  components: {
    Button,
  },
  styles: {
    global: props => ({
      body: {
        color: mode('myDark2', 'myLight')(props),
        bg: mode('myLight', 'myDark2')(props),
      },
    }),
  },
});
