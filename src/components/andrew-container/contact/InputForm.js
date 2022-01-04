import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export const InputForm = (
  { inputTitle, id, type, handleInput, helperText, errorText },
  props
) => {
  const [input, setInput] = useState('');

  const isError = input === '';
  return (
    <FormControl isInvalid={isError} isRequired>
      <FormLabel htmlFor="email">{inputTitle}</FormLabel>
      {type !== 'textArea' && (
        <Input
          id={id}
          type={type}
          value={input}
          onChange={handleInput}
          variant="filled"
        />
      )}
      {type === 'textArea' && <Textarea id={id} variant="filled" />}
      {!isError ? (
        <FormHelperText>{helperText}</FormHelperText>
      ) : (
        <FormErrorMessage>{errorText}</FormErrorMessage>
      )}
    </FormControl>
  );
};
