import {
  Box,
  CircularProgress,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export const InputForm = (
  { inputTitle, id, type, handleInput, input, helperText, errorText, onChange },
  props
) => {
  const [length, setLength] = useState(0);
  const handleTextArea = e => {
    setLength(500 - e.target.value.length);
    handleInput(e);
  };

  const isError = input === '';
  return (
    <FormControl isInvalid={isError} isRequired onChange={onChange}>
      <FormLabel htmlFor="email">{inputTitle}</FormLabel>
      {type !== 'textArea' && (
        <Input
          id={id}
          type={type}
          value={input}
          onChange={handleInput}
          variant="filled"
          isInvalid={input.length <= 0}
        />
      )}
      {type === 'textArea' && (
        <Textarea
          id={id}
          variant="filled"
          onChange={handleTextArea}
          value={input}
          isInvalid={length < 0}
        />
      )}
      {!isError ? (
        <FormHelperText color={length >= 0 ? 'black' : 'red'}>
          {helperText}
          <Flex direction="row" base align={'center'}>
            <Box w="8">{type === 'textArea' && length}</Box>
            <Box>
              {type === 'textArea' && (
                <CircularProgress
                  p="1"
                  size="24px"
                  value={length}
                  min={0}
                  max={500}
                  color={length >= 0 ? 'green.500' : 'red'}
                />
              )}
            </Box>
          </Flex>
        </FormHelperText>
      ) : (
        <FormErrorMessage>{errorText}</FormErrorMessage>
      )}
    </FormControl>
  );
};
