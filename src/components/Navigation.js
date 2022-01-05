import { Stack } from '@chakra-ui/layout';
import { NavigationButtons } from './andrew-container/nav/NavigationButtons';
import { Logo } from './andrew-container/nav/Logo';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { ColorSwitcher } from './andrew-container/nav/ColorSwitcher';
import { GithubIcon } from '../icons/GitHubIcon';
import { LinkedInIcon } from '../icons/LinkedInIcon';
import { SocialButtons } from './andrew-container/nav/SocialButtons';

export const Navigation = props => {
  return (
    <Stack h="100%" w="100%" p="8" spacing="8" className='nav'>
      <Box className='nav-logo'>
        <Logo />
      </Box>
      <Box className='nav-buttons'>
        <NavigationButtons handleChangeInfo={props.handleChangeInfo} />
      </Box>
      <Stack direction="row" spacing="auto">
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
