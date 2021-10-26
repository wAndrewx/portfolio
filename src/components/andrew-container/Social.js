import { Image } from '@chakra-ui/image';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, Stack } from '@chakra-ui/layout';
import React from 'react';

export const Social = () => {
  return (
    <Stack id="social" isInline spacing="5" >
      <Link
        as="a"
        href="https://github.com/wAndrewx"
        bgGradient="radial(myLight 60%,transparent 61%)"
        borderRadius="full"
        objectFit
        w={['48px', '56px']}
      >
        <StaticImage
          src="../../images/github.png"
          alt="github_profile_andrew_huynh_wandrewx"
          id="github_profile"
          placeholder="blurred"
          objectFit
        />
      </Link>
      <Link
        as="a"
        href="https://www.linkedin.com/in/andrew-huynh-/"
        bgGradient="radial(myLight 60%,transparent 61%)"
        borderRadius="full"
        w={['48px', '56px']}
      >
        <StaticImage
          alt="linkedin_profile_andrew_huynh_"
          id="linkedin_profile"
          placeholder="blurred"
          src="../../images/linkedin.png"
          boxSize={['48px', '56px']}
        />
      </Link>
    </Stack>
  );
};
