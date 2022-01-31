import App from '../components/App';
import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Index() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6Ld6IC4eAAAAAKNbmEZ2S0oYs3RdioRlsA9b4SSX"
      scriptProps={{
        async: true,
      }}
      // useRecaptchaNet={true}
    >
      <Box w="100vw" h="100vh">
        <App />
      </Box>
    </GoogleReCaptchaProvider>
  );
}

export default Index;
