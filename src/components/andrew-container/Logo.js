import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Stack } from '@chakra-ui/layout';
import { ModalBody } from '@chakra-ui/modal';
import { Modal } from '@chakra-ui/modal';
import { ModalFooter } from '@chakra-ui/modal';
import { ModalContent } from '@chakra-ui/modal';
import { ModalHeader } from '@chakra-ui/modal';
import { ModalOverlay } from '@chakra-ui/modal';
import { Description } from './Description';
import { LogoName } from './LogoName';

export const Logo = () => {
  const backgroundColor = useColorModeValue('myLight', 'myDark');
  const colorStroke = useColorModeValue('myDark', 'myLight');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      id="name-logo "
      w="310px"
      isInline
      userSelect="none"
      onClick={() => {
        onOpen();
      }}
    >
      {/* BAR */}
      <Box h="98%" w="2" bg="tertiary" id="bar">
        {' '}
      </Box>
      {/* NAME */}
      <LogoName backgroundColor={backgroundColor} colorStroke={colorStroke} />
      <Description
        onClose={onClose}
        isOpen={isOpen}
        backgroundColor={backgroundColor}
        colorStroke={colorStroke}
      />
    </Stack>
  );
};
