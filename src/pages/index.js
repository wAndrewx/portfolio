import App from '../components/App';
import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

function Index() {
  return (
    <Box w="100vw" h="100vh">
      <App />
    </Box>
  );
}

export default Index;
