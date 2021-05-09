import { Button } from '@chakra-ui/button';
import { ModalHeader } from '@chakra-ui/modal';
import { ModalFooter } from '@chakra-ui/modal';
import { ModalBody } from '@chakra-ui/modal';
import { ModalContent } from '@chakra-ui/modal';
import { ModalOverlay } from '@chakra-ui/modal';
import { Modal } from '@chakra-ui/modal';

export const Description = ({
  onClose,
  isOpen,
  backgroundColor,
  colorStroke,
}) => {
  let description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' +
    'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim' +
    'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' +
    'aliquip ex ea commodo consequat. Duis aute irure dolor in'

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="scale"
      scrollBehavior={'inside'}
    >
      <ModalOverlay />
      <ModalContent backgroundColor={backgroundColor} colorStroke={colorStroke}>
        <ModalHeader fontSize="2.5em" color='highlight'>About me</ModalHeader>
        <ModalBody fontSize="1.5em">{description}</ModalBody>
        <ModalFooter alignSelf='start'>
          <Button variant="andrew" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
