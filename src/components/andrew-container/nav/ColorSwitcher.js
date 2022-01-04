import { IconButton } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Stack } from '@chakra-ui/layout';
import React from 'react';

export const ColorSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorStroke = useColorModeValue('myDark', 'myLight');
  const colorBg = useColorModeValue('myLight', 'myDark');
  const handleColorMode = () => {
    toggleColorMode();
  };
  return (
    <Stack direction="row">
      <IconButton
        aria-label="colormode-toggle"
        icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
        onClick={handleColorMode}
        background="colorBg"
        isRound
        color={colorStroke}
      ></IconButton>
    </Stack>
  );
};
