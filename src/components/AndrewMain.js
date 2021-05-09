import { Flex, useMediaQuery } from '@chakra-ui/react';
import { Social } from './andrew-container/Social';
import { Clickables } from './andrew-container/Clickables';
import { Logo } from './andrew-container/Logo';

export const AndrewMain = () => {
  const [isMobile] = useMediaQuery('(min-width:980px)');
  return (
    <Flex
      direction="column"
      align="center"
      justify="space-evenly"
      h="564px"
      px="4"
      alignItems="start"
      // border='1px'
      borderRadius="4"
      // boxShadow='md'
    >
      <Logo />
      <Social />
      <Clickables />
    </Flex>
  );
};
