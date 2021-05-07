import { IconButton } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout';

export const ColorSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorStroke = useColorModeValue('myDark', 'myLight');
  const handleColorMode = () => {
    toggleColorMode();
  };
  return (
    <Box
      d="flex"
      flexDirection="row"
      justifyContent="end"
      h='8vh'
      pr='8'
      pt='8'
    >
      <IconButton
        aria-label="colormode-toggle"
        icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
        onClick={handleColorMode}
        variant="ghost"
        isRound
        color={colorStroke}
      ></IconButton>
    </Box>
  );
};
