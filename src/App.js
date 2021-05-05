import React from 'react';
import {
  ChakraProvider,
  Flex,
} from '@chakra-ui/react';
import { andrewTheme } from './styles/andrewTheme'
import { AndrewMain } from './components/AndrewMain';


function App() {
  return (
    <ChakraProvider theme={andrewTheme}>
        <Flex direction='column' align='center' justify='center' color='myLight' bg='myDark' w='100vw' h='100vh'>
          <AndrewMain />
        </Flex>
    </ChakraProvider>
  );
}

export default App;
