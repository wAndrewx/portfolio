import { Button } from '@chakra-ui/button';
import { ModalHeader } from '@chakra-ui/modal';
import { ModalFooter } from '@chakra-ui/modal';
import { ModalBody } from '@chakra-ui/modal';
import { ModalContent } from '@chakra-ui/modal';
import { ModalOverlay } from '@chakra-ui/modal';
import { Modal } from '@chakra-ui/modal';
import React from 'react';

export const ContentModal = ({
  title,
  content,
  onClose,
  isOpen,
  backgroundColor,
  colorStroke,
}) => {
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      scrollBehavior={'inside'}
    >
      <ModalOverlay />
      <ModalContent
        backgroundColor={backgroundColor}
        colorStroke={colorStroke}
        mx={2}
      >
        <ModalHeader fontSize="2.5em" lineHeight={1}>
          {title}
        </ModalHeader>
        <ModalBody fontSize="1.1em">{content}</ModalBody>
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
