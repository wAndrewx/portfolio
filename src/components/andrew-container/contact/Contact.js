import { Box } from '@chakra-ui/layout';
import {
  Flex,
  useColorMode,
  Stack,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { AnimationWrapper } from '../AnimationWrapper';
import { InputForm } from './InputForm';

export const Contact = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [input, setInput] = useState('');
  const [isDesktop] = useMediaQuery('(min-width:62em)');

  const handleInputChange = e => setInput(e.target.value);

  return (
    <AnimationWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Andrew Huynh | Contact</title>
      </Helmet>
      <Box
        p={8}
        borderRadius="md"
        bg={
          // colorMode === 'light' ? whiten('highlight', 20) : 'whiteAlpha.300'
          colorMode === 'light' ? 'blackAlpha.300' : 'whiteAlpha.300'
        }
      >
        <Flex direction="column">
          <Stack direction={isDesktop ? 'row' : 'column'} spacing="4">
            <InputForm
              id="name"
              inputTitle="Name"
              type="text"
              helperText="YO"
              errorText="Please fill in your name"
            />
            <InputForm
              id="email"
              inputTitle="Email"
              type="Email"
              errorText="Please provide an email"
              helperText=""
            />
          </Stack>
          <InputForm
            id="message"
            inputTitle="Message"
            type="textArea"
            helperText="sss"
          />
        </Flex>
        <Button my="2" variant="andrew">
          Submit
        </Button>
      </Box>
    </AnimationWrapper>
  );
};
