import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import { Stack } from '@chakra-ui/layout';
import { ProjectsContainer } from './ProjectsContainer';

export const Clickables = () => {
  const backgroundColor = useColorModeValue('myLight', 'myDark');
  const colorStroke = useColorModeValue('myDark', 'myLight');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack id="clickables" isInline spacing="58px">
      <Button
        id="linkedin"
        variant="andrew"
        onClick={() => {
          onOpen();
        }}
      >
        PROJECTS
      </Button>
      <Button id="linkedin" variant="andrew">
        CONTACT
      </Button>
      <ProjectsContainer
        onClose={onClose}
        isOpen={isOpen}
        backgroundColor={backgroundColor}
        colorStroke={colorStroke}
      />
    </Stack>
  );
};