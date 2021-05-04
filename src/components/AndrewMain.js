import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';

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
      <Stack id="name-logo " isInline>
        <Box h="98%" w="2%" bg="tertiary" id="bar">
          {' '}
        </Box>
        <Text
          as="h1"
          lineHeight="77px"
          fontSize="64px"
          fontWeight="bold"
          color="highlight"
        >
          ANDREW HUYNH
        </Text>
      </Stack>
      <Stack id="social" isInline spacing="20" h="56px">
        <Image
          bgGradient="radial(myLight 60%,transparent 61%)"
          borderRadius="full"
          fallbackSrc="./images/iconmonstr-github.png"
        />
        <Image
          bgGradient="radial(myLight 60%,transparent 61%)"
          borderRadius="full"
          fallbackSrc="./images/iconmonstr-linkedin.png"
        />
      </Stack>
      <Stack id="clickables" isInline spacing='58px'>
        <Button
          id="linkedin"
          variant="andrew"
          lineHeight='43px'
          letterSpacing="0.19em"
          color="tertiary"
          fontWeight="light"
          fontSize="36px"
        >
          PROJECTS
        </Button>
        <Button
          id="linkedin"
          variant="andrew"
          lineHeight='43px'
          letterSpacing="0.19em"
          color="tertiary"
          fontWeight="light"
          fontSize="36px"
        >
          CONTACT
        </Button>
      </Stack>
      <Box
        id="description"
        minW="564px"
        flexWrap="wrap"
        fontSize="36px"
        fontWeight="light"
        lineHeight=' 93.1%;'
      >
        Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Mauris et nulla
        enim. Aliquam <br/> dignissim volutpat nisi, nec laoreet leo <br/>pellentesque
        quis.
      </Box>
    </Flex>
  );
};
