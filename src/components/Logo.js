import { Box, Stack, Text } from '@chakra-ui/layout';

export const Logo = () => {
  return (
    <Stack id="name-logo " isInline>
      <Box h="98%" w="2%" bg="tertiary" id="bar">
        {' '}
      </Box>
      <Text
        as="h1"
        lineHeight="77px"
        fontSize="64px"
        fontWeight="bold"
        color="highlight"
      >
        ANDREW HUYNH
      </Text>
    </Stack>
  );
};
