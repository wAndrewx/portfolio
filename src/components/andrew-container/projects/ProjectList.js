import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import { projects } from '../../../info';
import Projects from './Projects';

export const ProjectLists = () => {
  return (
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
  );
};
