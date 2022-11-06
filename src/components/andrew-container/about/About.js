import { Box, Text } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/react';
import React from 'react';
import { AnimationWrapper } from '../AnimationWrapper';

export const About = props => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <AnimationWrapper>
      <Box
        p={8}
        mb={8}
        borderRadius="md"
        bg={
          // colorMode === 'light' ? whiten('highlight', 20) : 'whiteAlpha.300'
          colorMode === 'light' ? 'blackAlpha.300' : 'whiteAlpha.300'
        }
      >
        <Text fontSize="1.2em">
          Fullstack Developer currently focused on backend technologies and
          branching into Cloud Engineering specifically working with AWS.
          <br></br>
          Anything about fitness, food, music or gaming is my jam.
        </Text>
        <Text fontSize="1.2em">
          Feel free to download my resume or get in contact with me via LinkedIn
        </Text>
      </Box>
    </AnimationWrapper>
  );
};
