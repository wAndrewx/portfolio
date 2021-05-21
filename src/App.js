import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { andrewTheme } from './styles/andrewTheme';
import { AndrewMain } from './components/AndrewMain';
import { ColorSwitcher } from './components/ColorSwitcher';

function App() {
  return (
    <ChakraProvider theme={andrewTheme}>
        <ColorSwitcher />
      <Flex direction="column" justify="center" w="100vw" h="96vh">
        <Flex direction="column" justifySelf="center" align="center">
          <AndrewMain />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
