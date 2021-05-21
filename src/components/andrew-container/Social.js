import { Image } from '@chakra-ui/image';
import { Link, Stack } from '@chakra-ui/layout';

export const Social = () => {
  return (
    <Stack id="social" isInline spacing="20" h={['48px', '56px']}>
      <Link as="a" href="https://github.com/wAndrewx">
        <Image
          alt="github_profile_andrew_huynh_wandrewx"
          id="github_profile"
          bgGradient="radial(myLight 60%,transparent 61%)"
          borderRadius="full"
          fallbackSrc="./images/iconmonstr-github.png"
          align="centre"
          boxSize={['48px', '56px']}
          w={['48px', '56px']}
          h="100%"
        />
      </Link>
      <Link as="a" href="https://www.linkedin.com/in/andrew-huynh-/">
        <Image
          alt="linkedin_profile_andrew_huynh_"
          id="linkedin_profile"
          bgGradient="radial(myLight 60%,transparent 61%)"
          borderRadius="full"
          fallbackSrc="./images/iconmonstr-linkedin.png"
          align="centre"
          w="100%"
          h="100%"
          boxSize={['48px', '56px']}
        />
      </Link>
    </Stack>
  );
};
