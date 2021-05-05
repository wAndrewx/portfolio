import { useState } from 'react';
import { DarkMode, Flex, useColorMode, useMediaQuery } from '@chakra-ui/react';
import { Social } from './Social';
import { Clickables } from './Clickables';
import { Logo } from './Logo';

export const AndrewMain = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMobile] = useMediaQuery('(min-width:980px)');
  return (
    <Flex
      direction="column"
      align="start"
      color="myLight"
      bg="myDark"
      justify="space-evenly"
      h="564px"
    >
      <Logo />
      <DarkMode/>
      <Social />
      <Clickables />

    </Flex>
  );
};
