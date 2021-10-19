import { ChakraProvider, Flex } from '@chakra-ui/react';
import { andrewTheme } from '../@chakra-ui/gatsby-plugin/style/andrewTheme';
import { AndrewMain } from './AndrewMain';
import { ColorSwitcher } from './ColorSwitcher';
import React from 'react';

const App = () => {
  return (
    <div>
      <ChakraProvider theme={andrewTheme}>
        <ColorSwitcher />
        <Flex direction="column" justify="center" w="100vw" h="96vh">
          <Flex direction="column" justifySelf="center" align="center">
            <AndrewMain />
          </Flex>
        </Flex>
      </ChakraProvider>
    </div>
  );
};

export default App;
