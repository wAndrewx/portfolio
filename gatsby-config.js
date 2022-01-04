module.exports = {
  siteMetadata: {
    // siteUrl: 'https://www.yourdomain.tld',
    title: 'portfolio',
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
