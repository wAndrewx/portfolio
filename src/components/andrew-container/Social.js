import { Image } from '@chakra-ui/image';
import { Link, Stack } from '@chakra-ui/layout';

export const Social = () => {
  return (
    <Stack id="social" isInline spacing="20" h={['48px', '56px']}>
      <Link href="https://github.com/wAndrewx">
        <Image
          bgGradient="radial(myLight 60%,transparent 61%)"
          borderRadius="full"
          fallbackSrc="./images/iconmonstr-github.png"
          align="centre"
          boxSize={['48px', '56px']}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/andrew-huynh-/">
        <Image
          bgGradient="radial(myLight 60%,transparent 61%)"
          borderRadius="full"
          fallbackSrc="./images/iconmonstr-linkedin.png"
          align="centre"
          boxSize={['48px', '56px']}
        />
      </Link>
    </Stack>
  );
};
