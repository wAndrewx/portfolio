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
  const [isDesktop] = useMediaQuery('(min-width: 62em)');
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
    <Flex
      h={'100%'}
      w={['100%', '4xl']}
      className="main-wrapper"
      justifyContent={'center'}
      alignItems={['center','start']}
    >
      <Box w="xs" id="main-nav" >
        <Navigation handleChangeInfo={handleChangeInfo} />
      </Box>
      {isDesktop && (
        <Box w="fit-content" h="100%" id="main-content">
          <Content page={page[mainIndex]} title={title[mainIndex]} />
        </Box>
      )}
    </Flex>
  );
};

// display: flex;
// align-items: flex-start;
// -moz-box-pack: center;
// justify-content: center;
// height: inherit;
// width: var(--chakra-sizes-4xl);
