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
          color="highlight"
          fontSize="1.3em"
        >
          <Text textShadow="0px 1px #1D1D1D">{projectTitle}</Text>
        </GridItem>
        {/* IMAGE OF PROJECT */}

        <GridItem
          rowStart={2}
          rowSpan={2}
          colSpan={2}
          rounded="4"
        >
          <Link href={projectLink}>
            <Image
              fallbackSrc={projectImg}
              align="centre"
              fit='cover'
              aria-label='link to github repo for project'
            />
          </Link>
        </GridItem>
        {/* Description */}
        <GridItem
          colStart={3}
          rowStart={2}
          rowSpan={3}
          colSpan={4}
          overflowY="scroll"
        >
          {projectDesc}
        </GridItem>
        {/* GITHUB LINK */}
        <GridItem colStart={1} colSpan={2}></GridItem>
        {/* tags */}
        <GridItem colStart={3} colSpan={4}>
          {projectTags.map((item, i) => (
            <Badge key={i} mr="1" colorScheme="messenger">
              {item}
            </Badge>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
};
