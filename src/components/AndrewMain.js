import { Box, Flex, Stack } from '@chakra-ui/react';
import { Social } from './andrew-container/Social';
import { Clickables } from './andrew-container/Clickables';
import { Logo } from './andrew-container/Logo';
import React from 'react';
import { projects } from '../info';
import Projects from './andrew-container/Projects';
import { useMediaQuery } from '@chakra-ui/media-query';
import { InfoWrapper } from './andrew-container/InfoWrapper';

export const AndrewMain = () => {
  const [isLargerThan968] = useMediaQuery('(min-width: 968px)');
  console.log(isLargerThan968);
  return (
    <Flex
      justify="center"
      h={['md', 'md', 'lg', '2xl']}
      w={['s', 'md', 'lg', '2xl']}
      alignItems="center"
      rounded="lg"
      bg="blue.100"
    >
      <Stack h="100%" w='30%' px={4} py="8" spacing="8">
        <Logo />
        {/* <Social /> */}
        <Clickables />
      </Stack>
      {/* Display */}
      {isLargerThan968 && (
      <InfoWrapper>
      {projects.map(project => {
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
      </InfoWrapper>
      )}
    </Flex>
  );
};
