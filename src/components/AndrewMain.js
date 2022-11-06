import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { About } from './andrew-container/about/About';
import { Navigation } from './Navigation';

import { ProjectLists } from './andrew-container/projects/ProjectList';

export const AndrewMain = () => {
  return (
    <Flex className="main-wrapper" justifyContent={'center'}>
      <Box w={['100%', '3xl']} id="main-content">
        <Navigation />
        <About />
        <ProjectLists />
      </Box>
    </Flex>
  );
};
