import App from '../components/App';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { andrewTheme } from '../@chakra-ui/gatsby-plugin/style/andrewTheme';

function Index() {
  return (
    <ChakraProvider theme={andrewTheme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Andrew Huynh | Software Developer</title>
      </Helmet>
      <App />
    </ChakraProvider>
  );
}

export default Index;
