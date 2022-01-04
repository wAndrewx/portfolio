import { IconButton } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Stack } from '@chakra-ui/layout';
import React from 'react';

export const SocialButtons = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorStroke = useColorModeValue('myDark', 'myLight');
  const colorBg = useColorModeValue('myLight', 'myDark');
  const handleRedirect = () => {
    // toggleColorMode();
  };
  return (
    <Stack as="a" href={props.link}>
      <IconButton
        aria-label="colormode-toggle"
        icon={props.icon}
        onClick={handleRedirect}
        background="colorBg"
        isRound
        color={colorStroke}
      ></IconButton>
    </Stack>
  );
};
