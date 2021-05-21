import { IconButton } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, Stack } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';

export const ColorSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorStroke = useColorModeValue('myDark', 'myLight');
  const handleColorMode = () => {
    toggleColorMode();
  };
  return (
    <Stack direction='row' justifyContent='flex-end' p='4' >
      <IconButton
        aria-label="colormode-toggle"
        icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
        onClick={handleColorMode}
        variant="ghost"
        isRound
        color={colorStroke}
      ></IconButton>
    </Stack>
  );
};
