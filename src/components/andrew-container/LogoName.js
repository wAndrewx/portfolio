import { Text } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/tooltip';
import React from 'react';

export const LogoName = ({colorStroke,backgroundColor}) => {
  return (
    <Tooltip
      label="Read More About Me"
      bg={colorStroke}
      color={backgroundColor}
      placement="auto"
      rounded="4"
      hasArrow
      arrowShadowColor={backgroundColor}
    >
      <Text
        fontSize="4em"
        fontWeight="bold"
        lineHeight={['55px']}
      >
        ANDREW HUYNH
      </Text>
    </Tooltip>
  );
};