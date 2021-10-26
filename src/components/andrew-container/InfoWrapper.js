import { Box, Divider, Heading } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
export const InfoWrapper = props => {
  const [header, setHeader] = useState('');

  useEffect(() => {
    setHeader(props.children[0].type.name);
    return () => {
      setHeader('');
    };
  }, [setHeader]);

  return (
    <Box bg="red.100" w="100%" h="100%" px="4" py="8" overflowY="scroll">
      <Heading lineHeight="32px">{header}</Heading>
 
      {props.children}
    </Box>
  );
};
