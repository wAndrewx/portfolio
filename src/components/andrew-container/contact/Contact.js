import { Box } from '@chakra-ui/layout';
import {
  Flex,
  useColorMode,
  Stack,
  Button,
  useMediaQuery,

} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AnimationWrapper } from '../AnimationWrapper';
import { InputForm } from './InputForm';

export const Contact = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDesktop] = useMediaQuery('(min-width:62em)');

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  const handleNameChange = e => setInputName(e.target.value);
  const handleEmailChange = e => setInputEmail(e.target.value);
  const handleMessageChange = e => setInputMessage(e.target.value);


  // Create an event handler so you can call the verification on button click event or form submit


  const handleEmailForm = e => {
    e.preventDefault();


    if (inputMessage.length <= 500) {
      const emailData = { inputName, inputEmail, inputMessage };
      console.log({ emailData });
    }
  };

  return (
    <AnimationWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Andrew Huynh | Contact</title>
      </Helmet>
      <Box
        p={8}
        borderRadius="md"
        w="100%"
        bg={
          // colorMode === 'light' ? whiten('highlight', 20) : 'whiteAlpha.300'
          colorMode === 'light' ? 'blackAlpha.300' : 'whiteAlpha.300'
        }
      >
        <form onSubmit={handleEmailForm}>
          <Flex direction="column">
            <Stack direction={isDesktop ? 'row' : 'column'} spacing="4">
              <InputForm
                id="name"
                inputTitle="Name"
                type="text"
                helperText=""
                errorText="Please fill in your name"
                handleInput={handleNameChange}
                input={inputName}
                // onChange={getMessage}
              />
              <InputForm
                id="email"
                inputTitle="Email"
                type="Email"
                errorText="Please provide an email"
                helperText=""
                handleInput={handleEmailChange}
                input={inputEmail}
              />
            </Stack>
            <InputForm
              id="message"
              inputTitle="Message"
              type="textArea"
              handleInput={handleMessageChange}
              input={inputMessage}
              errorText="Please provide a message"
              isMessageDisabled={}
            />
          </Flex>

          <Button
            my="2"
            variant="andrew"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </AnimationWrapper>
  );
};
