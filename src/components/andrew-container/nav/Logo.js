import { useColorModeValue } from '@chakra-ui/color-mode';
import { Stack, Text } from '@chakra-ui/layout';
import React from 'react';

export const Logo = () => {
  const backgroundColor = useColorModeValue('myLight', 'myDark');
  const colorStroke = useColorModeValue('myDark', 'myLight');

  return (
    <Stack id="name-logo " isInline userSelect="none">
      <Text fontSize="3em" fontWeight="bold" lineHeight="44px">
        ANDREW HUYNH
      </Text>
    </Stack>
  );
};
