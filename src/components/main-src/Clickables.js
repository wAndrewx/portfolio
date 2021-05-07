import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import { Stack } from '@chakra-ui/layout';

export const Clickables = () => {
  const backgroundColor = useColorModeValue('myLight', 'myDark');
  const colorStroke = useColorModeValue('myDark', 'myLight');
  const { isOpen, onOpen, onClose } = useDisclosure();

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
