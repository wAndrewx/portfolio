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
        borderRadius="md"
        bg={
          // colorMode === 'light' ? whiten('highlight', 20) : 'whiteAlpha.300'
          colorMode === 'light' ? 'blackAlpha.300' : 'whiteAlpha.300'
        }
      >
        <Text fontSize="1.3em">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
    </AnimationWrapper>
  );
};
