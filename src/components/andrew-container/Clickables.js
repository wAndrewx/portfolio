import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import { Stack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/react';
import { Description } from './AboutModal';
import React from 'react';
import { ProjectsModal } from './ProjectsModal';

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

  return (
    <Stack direction="column" id="clickables">
      <Button
        id="andrew-linkedin"
        variant="andrew"
        fontSize={['0.8em', '0.9em', '1em']}
        letterSpacing={3}
        as="a"
        href="https://www.linkedin.com/in/andrew-huynh-/"
      >
        LinkedIn
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
      <Button
        id="andrew-github"
        variant="andrew"
        fontSize={['0.8em', '0.9em', '1em']}
        letterSpacing={3}
        as="a"
        href="https://github.com/wAndrewx"
      >
        Github
      </Button>
      {/* ABOUT ME */}
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
      <ProjectsModal
        onClose={onCloseProjects}
        isOpen={isOpenProjects}
        backgroundColor={backgroundColor}
        colorStroke={colorStroke}
      />
    </Stack>
  );
};
