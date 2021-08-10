import { Divider, Flex, Text } from '@chakra-ui/layout';
import { Projects } from './Projects';
import {
  ModalOverlay,
  ModalContent,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/modal';
import { Button } from '@chakra-ui/button';
import { projects } from '../../info';
import { whiten } from '@chakra-ui/theme-tools';

export const ProjectsContainer = ({
  onClose,
  isOpen,
  backgroundColor,
  colorStroke,
}) => {
  const [...projectObj] = projects;

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="scale"
      scrollBehavior={'inside'}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent
        backgroundColor={backgroundColor}
        colorStroke={colorStroke}
        mx={2}
      >
        <ModalHeader fontSize="2em">
          Projects
          <Text fontSize="xs">Click images for repository and title for demo</Text>
        </ModalHeader>
        <Divider></Divider>
        <ModalBody
          overflow="auto"
          css={props => ({
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: whiten('#101010', 40)(props),
              borderRadius: '24px',
            },
            scrollbarWidth: 'thin',
          })}
        >
          <Flex direction="column">
            {projectObj.map(project => {
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
          </Flex>
        </ModalBody>
        <ModalFooter alignSelf="start">
          <Button
            variant="andrew"
            fontSize={['0.7em', '0.9em', '1em']}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
