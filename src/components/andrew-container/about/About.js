import { Box, Text } from '@chakra-ui/layout';
import { List, useColorMode, ListItem, ListIcon } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { AnimationWrapper } from '../AnimationWrapper';

export const About = props => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <AnimationWrapper>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Andrew Huynh | About</title>
      </Helmet>
        <Box
          p={8}
          borderRadius="md"
          bg={
            // colorMode === 'light' ? whiten('highlight', 20) : 'whiteAlpha.300'
            colorMode === 'light' ? 'blackAlpha.300' : 'whiteAlpha.300'
          }
        >
          <Text fontSize="1.3em">
            Software developer based in Toronto, Canada. Working mainly with
            Typescript as a fullstack developer with a focus on backend
            processes and branching into DevOps practices. Passionate about fitness, keyboard building, music,and gaming.
          </Text>
        </Box>
    </AnimationWrapper>
  );
};
