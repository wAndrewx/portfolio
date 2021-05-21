import { Image } from '@chakra-ui/image';
import { Divider, Link } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Badge } from '@chakra-ui/layout';
import { Box, Grid, GridItem } from '@chakra-ui/layout';
import { whiten } from '@chakra-ui/theme-tools';

export const Projects = ({
  projectTitle,
  projectDesc,
  projectTags,
  projectImg,
  projectLink,
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
          <Text>{projectTitle}</Text>
          <Divider></Divider>
        </GridItem>
        {/* IMAGE OF PROJECT */}

        {projectImg && (
          <GridItem rowStart={2} rowSpan={2} colSpan={2} rounded="4">
            <Link href={projectLink}>
              <Image
                fallbackSrc={projectImg}
                align="centre"
                fit="scale-down"
                aria-label="link to github repo for project"
                alt="github_project"
              ></Image>
            </Link>
          </GridItem>
        )}
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
            <Badge key={(item, ':', i)} mr="1" colorScheme="gray">
              {item}
            </Badge>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
};
