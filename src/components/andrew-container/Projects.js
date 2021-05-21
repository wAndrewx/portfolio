import { Image } from '@chakra-ui/image';
import { Link } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Badge } from '@chakra-ui/layout';
import { Box, Flex, Heading, Grid, GridItem } from '@chakra-ui/layout';

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
        my="2"
      >
        {/* TITLE OF PROJECT */}
        <GridItem
          rowSpan={1}
          colSpan={3}
          py="1"
          color="tertiary"
          fontSize="1.3em"
        >
          <Text textDecoration="underline">{projectTitle}</Text>
        </GridItem>
        {/* IMAGE OF PROJECT */}

        <GridItem rowStart={2} rowSpan={2} colSpan={2} rounded="4">
          <Link href={projectLink}>
            <Image
              fallbackSrc={projectImg}
              align="centre"
              fit="cover"
              h="100%"
              aria-label="link to github repo for project"
            />
          </Link>
        </GridItem>
        {/* Description */}
        <GridItem
          colStart={3}
          rowStart={2}
          rowSpan={3}
          colSpan={4}
          overflowY="auto"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'red',
              borderRadius: '24px',
            },
          }}
        >
          {projectDesc}
        </GridItem>
        {/* GITHUB LINK */}
        <GridItem colStart={1} colSpan={2} rowStart={4} fontSize="0.5em">
          Image redirects to github repo
        </GridItem>
        {/* tags */}
        <GridItem colStart={3} colSpan={4}>
          {projectTags.map((item, i) => (
            <Badge key={i} mr="1" colorScheme="gray">
              {item}
            </Badge>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
};
