import { Image } from '@chakra-ui/image';
import { Divider, Link } from '@chakra-ui/layout';
import { Badge } from '@chakra-ui/layout';
import { Box, Grid, GridItem } from '@chakra-ui/layout';
import { whiten } from '@chakra-ui/theme-tools';
import { Button, ButtonGroup } from '@chakra-ui/react';
export const Projects = ({
  projectTitle,
  projectLink,
  projectDesc,
  projectTags,
  projectImg,
  projectGithubLink,
}) => {
  return (
    <Box>
      <Grid
        h="300px"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={2}
      >
        {/* TITLE OF PROJECT */}
        <GridItem rowSpan={1} colSpan={6} color="tertiary" fontSize="1.3em">
          <Link href={projectLink}>{projectTitle}</Link>
          <Divider></Divider>
        </GridItem>
        {/* IMAGE OF PROJECT */}

        {projectImg && (
          <GridItem rowStart={2} colSpan={2}>
            <Image
              fallbackSrc={projectImg}
              align="centre"
              fit="scale"
              aria-label="link to github repo for project"
              alt="github_project"
            ></Image>
          </GridItem>
        )}
        <GridItem colSpan="2" rowSpan="1">
          <Link href={projectLink}>
            <Button variant='andrew' w="100%">Demo</Button>
          </Link>
        </GridItem>
        <GridItem colSpan="2" rowSpan="1">
          <Link href={projectGithubLink}>
            <Button variant='andrew' w="100%">Github</Button>
          </Link>
        </GridItem>
        {/* Description */}
        <GridItem
          colStart={3}
          rowStart={2}
          rowSpan={3}
          colSpan={4}
          overflowY="auto"
          css={props => ({
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: whiten('#101010', 20)(props),
              borderRadius: '24px',
            },
            'scrollbar-width': 'thin',
          })}
        >
          {projectDesc}
        </GridItem>

        {/* tags */}
        <GridItem colStart={3} colSpan={4}>
          {projectTags.map((item, i) => (
            <Badge
              key={(item, ':', i)}
              mr="1"
              colorScheme="green"
              rounded="full"
            >
              {item}
            </Badge>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
};
