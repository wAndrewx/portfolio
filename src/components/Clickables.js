import { Button } from '@chakra-ui/button';
import { Stack } from '@chakra-ui/layout';

export const Clickables = () => {
  return (
    <Stack id="clickables" isInline spacing="58px">
      <Button id="linkedin" variant="andrew">
        PROJECTS
      </Button>
      <Button id="linkedin" variant="andrew">
        CONTACT
      </Button>
    </Stack>
  );
};
