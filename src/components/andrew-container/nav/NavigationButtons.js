import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import { Stack } from '@chakra-ui/layout';
import { useMediaQuery, Box } from '@chakra-ui/react';
import React from 'react';
import { EmailIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { PersonIcon } from '../../../icons/PersonIcon';
import { AnimationWrapper } from '../AnimationWrapper';
import { ContentModal } from '../Modal';
import { projects } from '../../../info';
import Projects from '../projects/Projects';
import { About } from '../about/About';
import { Contact } from '../contact/Contact';

export const NavigationButtons = ({ handleChangeInfo }) => {
  const backgroundColor = useColorModeValue('myLight', 'myDark');
  const colorStroke = useColorModeValue('myDark', 'myLight');
  const [isDesktop] = useMediaQuery('(min-width:968px)');
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

  const {
    isOpen: isOpenContact,
    onOpen: onOpenContact,
    onClose: onCloseContact,
  } = useDisclosure();

  const handleIndex = index => {
    handleChangeInfo(index);
  };

  const showInfoHandler = (mobileOpen, deskOpen, index) => {
    if (isDesktop) {
      deskOpen(index);
    } else {
      mobileOpen();
    }
  };

  return (
    <Box>
      <AnimationWrapper>
        <Stack direction="column" id="clickables">
          {/* EMAIL CONTACT */}
          <Button
            id="andrew-email"
            variant="andrew"
            fontSize={['0.8em', '0.9em', '1em']}
            letterSpacing={3}
            // as="a"
            // href="mailto:contactandrewhuynh@gmail.com"
            leftIcon={<EmailIcon />}
            onClick={() => {
              showInfoHandler(onOpenContact, handleIndex, 2);
            }}
          >
            CONTACT
          </Button>
          {/* PROJECTS */}
          <Button
            id="andrew-projects"
            variant="andrew"
            fontSize={['0.8em', '0.9em', '1em']}
            letterSpacing={3}
            onClick={() => {
              showInfoHandler(onOpenProjects, handleIndex, 1);
            }}
            leftIcon={<InfoOutlineIcon />}
          >
            PROJECTS
          </Button>
          {/* ABOUT ME */}
          <Button
            id="andrew-about"
            variant="andrew"
            fontSize={['0.8em', '0.9em', '1em']}
            letterSpacing={3}
            onClick={() => {
              showInfoHandler(onOpenDesc, handleIndex, 0);
            }}
            leftIcon={<PersonIcon />}
          >
            About me
          </Button>
        </Stack>
      </AnimationWrapper>
      <ContentModal
        onClose={onCloseProjects}
        isOpen={isOpenProjects}
        backgroundColor={backgroundColor}
        colorStroke={colorStroke}
        title="Projects"
        content={projects.map(project => {
          return (
            <Projects
              projectTitle={project.title}
              projectDesc={project.description}
              projectTags={project.tags}
              projectImg={project.image}
              projectGithubLink={project.projectGithubLink}
              projectLink={project.link}
              key={('project;', project.id)}
            />
          );
        })}
      />
      <ContentModal
        onClose={onCloseContact}
        isOpen={isOpenContact}
        backgroundColor={backgroundColor}
        colorStroke={colorStroke}
        title="Contact"
        content={<Contact />}
      />
      <ContentModal
        onClose={onCloseDesc}
        isOpen={isOpenDesc}
        backgroundColor={backgroundColor}
        colorStroke={colorStroke}
        title="About"
        content={<About />}
      />
      
    </Box>
  );
};
