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
    <Stack id="clickables" isInline spacing="58px" fontSize="1.2em">
      <Button
        id="andrew-projects"
        variant="andrew"
        fontSize={['0.7em', '0.9em', '1em']}
        onClick={() => {
          onOpen();
        }}
      >
        PROJECTS
      </Button>
      <Button
        id="andrew-email"
        variant="andrew"
        fontSize={['0.7em', '0.9em', '1em']}
        as="a"
        href="mailto:contactandrewhuynh@gmail.com"
      >
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
