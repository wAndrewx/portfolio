import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import {  Stack } from '@chakra-ui/layout';
import { Description } from './Description';
import { LogoName } from './LogoName';
import React from 'react';

export const Logo = () => {
  const backgroundColor = useColorModeValue('myLight', 'myDark');
  const colorStroke = useColorModeValue('myDark', 'myLight');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      id="name-logo "
      isInline
      userSelect="none"
      onClick={() => {
        onOpen();
      }}
    >
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
