import {
  Flex,
  useMediaQuery,
} from '@chakra-ui/react';
import { Social } from './main-src/Social';
import { Clickables } from './main-src/Clickables';
import { Logo } from './main-src/logo/Logo';

export const AndrewMain = () => {
  const [isMobile] = useMediaQuery('(min-width:980px)');
  return (
    <Flex
      direction="column"
      align="center"
      justify="space-evenly"
      h="564px"
      px="4"
      alignItems='start'
      // border='1px'
      borderRadius='4'
      // boxShadow='md'
    >
      <Logo />
      <Social />
      <Clickables />
    </Flex>
  );
};
