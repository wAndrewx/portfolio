import { Stack } from '@chakra-ui/layout';
import { Logo } from './andrew-container/nav/Logo';
import { Box, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { ColorSwitcher } from './andrew-container/nav/ColorSwitcher';
import { GithubIcon } from '../icons/GitHubIcon';
import { LinkedInIcon } from '../icons/LinkedInIcon';
import { SocialButtons } from './andrew-container/nav/SocialButtons';

export const Navigation = props => {
  const [isDesktop] = useMediaQuery('(min-width:62em)');

  return (
    <Stack
      pt="8"
      justifyContent={'space-between'}
      className="nav"
      direction={isDesktop ? 'row' : 'column'}
      align={'flex-start'}
      mb="8"
    >
      <Box className="nav-logo" >
        <Logo />
      </Box>

      <Stack direction="row" spacing="4">
        <ColorSwitcher />
        <SocialButtons
          icon={<GithubIcon />}
          link="https://github.com/wAndrewx"
        />
        <SocialButtons
          icon={<LinkedInIcon />}
          link="https://www.linkedin.com/in/andrew-huynh-"
        />
      </Stack>
    </Stack>
  );
};
