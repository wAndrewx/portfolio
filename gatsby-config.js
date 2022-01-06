module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.andrewhuynh.ca',
    // url,
    title: 'Andrew Huynh | Software Developer',
    description: 'Software developer based in Toronto, Canada',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          layout: 'fullWidth',
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [750, 968, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    'gatsby-plugin-image',
    `gatsby-plugin-react-helmet`,
    '@chakra-ui/gatsby-plugin',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
};
