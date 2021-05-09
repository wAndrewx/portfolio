import { Box, Flex, Stack } from '@chakra-ui/layout';
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
      <ModalContent backgroundColor={backgroundColor} colorStroke={colorStroke}>
        <ModalHeader fontSize="2em" color='highlight' >Projects</ModalHeader>
        <ModalBody>
          <Flex direction="column">
            {projectObj.map(project => {
              return (
                <Projects
                  projectTitle={project.title}
                  projectDesc={project.description}
                  projectTags={project.tags}
                  projectImg={project.image}
                  projectLink={project.link}
                  id={project.id}
                />
              );
            })}
          </Flex>
        </ModalBody>
        <ModalFooter alignSelf="start">
          <Button variant="andrew" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
