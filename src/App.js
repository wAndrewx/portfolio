import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
} from '@chakra-ui/react';
import { andrewTheme } from './theme/andrewTheme'


function App() {
  return (
    <ChakraProvider theme={andrewTheme}>
      <Flex >
        

      </Flex>
    </ChakraProvider>
  );
}

export default App;
