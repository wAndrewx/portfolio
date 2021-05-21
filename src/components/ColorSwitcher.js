import { IconButton } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';

export const ColorSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorStroke = useColorModeValue('myDark', 'myLight');
  const handleColorMode = () => {
    toggleColorMode();
  };
  return (
    <Flex align='end' h="8vh" pt="8" px="8" justify="end">
      <IconButton
        aria-label="colormode-toggle"
        icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
        onClick={handleColorMode}
        variant="ghost"
        isRound
        color={colorStroke}
      ></IconButton>
    </Flex>
  );
};
