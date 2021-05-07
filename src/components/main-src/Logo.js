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
import { LogoName } from './LogoName';

export const Logo = () => {
  const backgroundColor = useColorModeValue('myLight', 'myDark');
  const colorStroke = useColorModeValue('myDark', 'myLight');
  const { isOpen, onOpen, onClose } = useDisclosure();

  let description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' +
    'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim' +
    'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' +
    'aliquip ex ea commodo consequat. Duis aute irure dolor in' +
    'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla' +
    'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in' +
    'culpa qui officia deserunt mollit anim id est laborum.;';

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
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInRight"
        scrollBehavior={'inside'}
      >
        <ModalOverlay />
        <ModalContent
          backgroundColor={backgroundColor}
          colorStroke={colorStroke}
        >
          <ModalHeader fontSize="2.5em">About me</ModalHeader>
          <ModalBody fontSize="1.5em">{description}</ModalBody>
          <ModalFooter>
            <Button variant="andrew" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
};