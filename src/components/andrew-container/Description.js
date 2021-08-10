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
    'I am a developer based in Toronto, Canada, who is currently a student ' +
    'majoring in Computer Science. ' +
    'I have a many interests which include, male fashion, cryptocurrency, political philosophy, gaming, weightlifting (pre covid) and building keyboards.';

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="scale"
      scrollBehavior={'inside'}
    >
      <ModalOverlay />
      <ModalContent
        backgroundColor={backgroundColor}
        colorStroke={colorStroke}
        mx={2}
      >
        <ModalHeader fontSize="2.5em" lineHeight={1}>
          Quick biography
        </ModalHeader>
        <ModalBody fontSize="1.1em">{description}</ModalBody>
        <ModalFooter alignSelf="start">
          <Button
            variant="andrew"
            fontSize={['0.7em', '0.9em', '1em']}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
