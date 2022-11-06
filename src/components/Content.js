import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { whiten } from '@chakra-ui/theme-tools';

export const Content = props => {
  return (
    <Box
    w='100%'
      h="100%"
      overflowY="auto"
      css={props => ({
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: whiten('#101010', 40)(props),
          borderRadius: '24px',
        },
        scrollbarWidth: 'thin',
      })}
     
      className="content-wrapper"
    >
     
      <Box className="content-page">{props.page}</Box>
    </Box>
  );
};
