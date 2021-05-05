import { transform } from 'framer-motion';

export const ButtonStyles = {
  // Styles for the base style
  baseStyle: {
    px: '0px',
    letterSpacing: '0.19em',
    color: 'tertiary',
    fontWeight: 'light',
    fontSize: '36px',
    border: '1px',
    justifyContent: 'center',
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    andrew: {
      borderRadius: 'full',
      _hover: {
        transform: 'scale(1.08)',
      },
      __focus: {
        boxShadow: 'lg',
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
};
