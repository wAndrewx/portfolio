import { Box, Flex, Stack } from '@chakra-ui/react';
import { Social } from './andrew-container/Social';
import { Clickables } from './andrew-container/Clickables';
import { Logo } from './andrew-container/Logo';
import React from 'react';

export const AndrewMain = () => {
  return (
    <Flex
      justify="center"
      h={['md', 'md', 'lg', '2xl']}
      w={['s', 'md', 'lg', '2xl']}
      alignItems="center"
      rounded="lg"
      bg="blue.100"
    >
      <Stack h="100%" px={4} py='8' w="30%" spacing='8'>
        <Logo />
        {/* <Social /> */}
        <Clickables />
      </Stack>
      <Box bg="red.100" w="70%" h="100%" px={4}></Box>
    </Flex>
  );
};
