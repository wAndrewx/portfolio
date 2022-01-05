import { ChakraProvider, Flex } from '@chakra-ui/react';
import { andrewTheme } from '../@chakra-ui/gatsby-plugin/style/andrewTheme';
import { AndrewMain } from './AndrewMain';
import React from 'react';

const App = () => {
  return (
    <ChakraProvider theme={andrewTheme}>
      <Flex direction="column" justify="center" w="100vw" h="100vh">
        <Flex direction="column" justifySelf="center" align="center" w='inherit' h='inherit'>
          <AndrewMain />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
