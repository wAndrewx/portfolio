import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { About } from './andrew-container/about/About';
import { Navigation } from './Navigation';
import { Content } from './Content';
import { projects } from '../info';
import Projects from './andrew-container/projects/Projects';
import { Contact } from './andrew-container/contact/Contact';

export const AndrewMain = () => {
  return (
    <Flex
      className="main-wrapper"
      justifyContent={'center'}
    >
      <Box w={['100%', '3xl']} id="main-content">
        <Navigation />
        <About />
        <Box>
          <Text
            pb="8"
            fontSize="2.3em"
            fontWeight="bold"
            lineHeight="44px"
            className="content-header"
          >
            {'Personal Projects'}
          </Text>
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
        </Box>
      </Box>
    </Flex>
  );
};
