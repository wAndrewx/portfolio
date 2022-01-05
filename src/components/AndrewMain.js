import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { About } from './andrew-container/about/About';
import { Navigation } from './Navigation';
import { Content } from './Content';
import { projects } from '../info';
import Projects from './andrew-container/projects/Projects';
import { Contact } from './andrew-container/contact/Contact';

export const AndrewMain = () => {
  const [isDesktop] = useMediaQuery('(min-width: 968px)');
  const [mainIndex, setMainIndex] = useState(0);

  const [page, setPage] = useState([
    <About />,
    projects.map(project => {
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
    }),
    <Contact />,
  ]);
  const [title, setTitle] = useState(['About', 'Projects', 'Contact']);

  const handleChangeInfo = index => {
    setMainIndex(index);
  };

  return (
    <Flex h={isDesktop ? '100vh' : 'lg'} w={isDesktop ? '4xl' : 'xs'} className='main-wrapper'>
      <Box w="xs" id='main-nav'>
        <Navigation handleChangeInfo={handleChangeInfo}  />
      </Box>
      {isDesktop && (
        <Box w="fit-content" id='main-content'>
            <Content page={page[mainIndex]} title={title[mainIndex]} />
        </Box>
      )}
    </Flex>
  );
};
