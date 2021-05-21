import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { Social } from './andrew-container/Social';
import { Clickables } from './andrew-container/Clickables';
import { Logo } from './andrew-container/Logo';

export const AndrewMain = () => {
  const [isMobile] = useMediaQuery('(min-width:980px)');
  return (
    <Flex
      direction="column"
      justify="center"
      h={['md', 'md', 'lg', 'xl']}
      w={['s', 'md', 'lg', 'xl']}
      mx="4"
      px="4"
      alignItems="center"
      rounded="lg"
      boxShadow="xl"
    >
      <Box
        d="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        h="100%"
      >
        <Logo />
        <Social />
        <Clickables />
      </Box>
    </Flex>
  );
};
