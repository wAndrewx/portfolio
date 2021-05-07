import { Stack } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Projects } from './Projects';
export const ProjectsContainer = () => {
  return (
    <Stack>
      <Projects />
      <Projects />
      <Projects />
    </Stack>
  );
};
