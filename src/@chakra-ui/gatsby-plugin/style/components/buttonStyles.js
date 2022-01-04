import { mode } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
  // Styles for the base style
  baseStyle: props => ({
    px: '0px',
    letterSpacing: '0.19em',
    fontWeight: 'light',
    justifyContent: 'center',
    textTransform: 'uppercase',
    backgroundColor: mode('blackAlpha.300', 'whiteAlpha.300')(props),
  }),
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    andrew: {
      borderRadius: 'md',
      _hover: {
        transform: 'scale(1.08)',
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
};
