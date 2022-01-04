import { Box, Badge, Flex, Link, Stack } from '@chakra-ui/layout';
import {
  Button,
  Heading,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';
import { GatsbyImage } from 'gatsby-plugin-image';

import React from 'react';
import { GithubIcon } from '../../../icons/GitHubIcon';
import { LinkIcon } from '@chakra-ui/icons';
import { AnimationWrapper } from '../AnimationWrapper';
import { graphql, useStaticQuery } from 'gatsby';

function Projects({
  projectTitle,
  projectLink,
  projectDesc,
  projectTags,
  projectImg,
  projectGithubLink,
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDesktop] = useMediaQuery('(min-width:968px)');
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const findImage = data => {
    const found = data.allFile.edges.find(image => {
      // console.log(image.node)
      return image.node.relativePath === projectImg;
    });
    return found.node.childrenImageSharp[0].gatsbyImageData;
  };

  return (
    <AnimationWrapper header="Projects">
      <Flex
        direction={isDesktop ? 'row' : 'column-reverse'}
        h={isDesktop ? '34vh' : '60vh'}
        w="100%"
        mb="8"
        id="project-container"
      >
        <Flex
          p="4"
          id="project-info"
          w={isDesktop ? '33%' : '100%'}
          h={isDesktop ? '100%' : '40%'}
          direction="column"
          bg={colorMode === 'light' ? 'blackAlpha.300' : 'whiteAlpha.300'}
          css={
            isDesktop
              ? {
                  borderTopLeftRadius: 'var(--chakra-radii-md)',
                  borderBottomLeftRadius: 'var(--chakra-radii-md)',
                }
              : {
                  borderBottomLeftRadius: 'var(--chakra-radii-md)',
                  borderBottomRightRadius: 'var(--chakra-radii-md)',
                }
          }
        >
          <Box>
            <Heading fontFamily="body" fontSize="1.2em" isTruncated>
              {projectTitle}
            </Heading>
          </Box>
          <Box
            overflowY="auto"
            flex="2"
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
            {projectDesc}
          </Box>
          <Stack direction="row" pt="4">
            <Button variant="andrew" size={isDesktop ? 'md' : 'sm'}>
              <Link href={projectLink}>
                <LinkIcon />
              </Link>
            </Button>
            <Button variant="andrew" size={isDesktop ? 'md' : 'sm'}>
              <Link href={projectGithubLink}>
                <GithubIcon />
              </Link>
            </Button>
          </Stack>
        </Flex>
        <Flex id="project-img" flex="2" align="flex-end">
          <Box
            h="100%"
            w="100%"
            borderRightRadius={isDesktop ? 'md' : 'none'}
            borderTopRadius={isDesktop ? 'none' : 'md'}
            style={{
              background: 'linear-gradient(0deg,#00000088 30%, #ffffff44 100%)',
            }}
            aria-label={`image of project-${projectImg}`}
          >
            <GatsbyImage
              image={findImage(data)}
              style={{
                borderTopRightRadius: 'var(--chakra-radii-md)',
                borderBottomRightRadius: isDesktop
                  ? 'var(--chakra-radii-md)'
                  : 'none',
                borderTopLeftRadius: isDesktop
                  ? 'none'
                  : 'var(--chakra-radii-md)',
                objectFit: 'cover',
                height: '100%',
              }}
              imgStyle={{
                zIndex: '-1',
              }}
              alt={`image of project-${projectImg}`}
            ></GatsbyImage>
          </Box>

          <Box position="absolute" p="4">
            {projectTags.map((item, i) => (
              <Badge key={(item, ':', i)} mr="1" borderRadius="md">
                {item}
              </Badge>
            ))}
          </Box>
        </Flex>
      </Flex>
    </AnimationWrapper>
  );
}

export default Projects;
