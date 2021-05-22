import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import { Stack } from '@chakra-ui/layout';
import { ProjectsContainer } from './ProjectsContainer';
import { useMediaQuery } from '@chakra-ui/react';
import { Description } from './Description';

export const Clickables = () => {
  const backgroundColor = useColorModeValue('myLight', 'myDark');
  const colorStroke = useColorModeValue('myDark', 'myLight');
  const {
    isOpen: isOpenProjects,
    onOpen: onOpenProjects,
    onClose: onCloseProjects,
  } = useDisclosure();
  const {
    isOpen: isOpenDesc,
    onOpen: onOpenDesc,
    onClose: onCloseDesc,
  } = useDisclosure();

  const [isMobile] = useMediaQuery('(min-width:1280px)');

  console.log(isMobile);
  return (
    <Stack
      direction={['column', 'column', 'column', 'column', 'row']}
      id="clickables"
      // isInline
      spacing={[3, 4, 5, 5]}
    >
      {/* ABOUT ME */}
      {!isMobile && (
        <Button
          id="andrew-about"
          variant="andrew"
          fontSize={['0.8em', '0.9em', '1em']}
          letterSpacing={3}
          onClick={() => {
            onOpenDesc();
          }}
        >
          About me
        </Button>
      )}
      <Description
        onClose={onCloseDesc}
        isOpen={isOpenDesc}
        backgroundColor={backgroundColor}
        colorStroke={colorStroke}
      />

      {/* PROJECTS */}
      <Button
        id="andrew-projects"
        variant="andrew"
        fontSize={['0.8em', '0.9em', '1em']}
        letterSpacing={3}
        onClick={() => {
          onOpenProjects();
        }}
      >
        PROJECTS
      </Button>
      {/* EMAIL CONTACT */}
      <Button
        id="andrew-email"
        variant="andrew"
        fontSize={['0.8em', '0.9em', '1em']}
        letterSpacing={3}
        as="a"
        href="mailto:contactandrewhuynh@gmail.com"
      >
        CONTACT
      </Button>
      <ProjectsContainer
        onClose={onCloseProjects}
        isOpen={isOpenProjects}
        backgroundColor={backgroundColor}
        colorStroke={colorStroke}
      />
    </Stack>
  );
};
