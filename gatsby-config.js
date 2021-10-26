module.exports = {
  siteMetadata: {
    // siteUrl: 'https://www.yourdomain.tld',
    title: 'portfolio',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',

    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    '@chakra-ui/gatsby-plugin',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
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
    // {
    //   resolve: '@chakra-ui/gatsby-plugin',
    //   options: {
    //     /**
    //      * @property {boolean} [resetCSS=true]
    //      * if false, this plugin will not use `<CSSReset />
    //      */
    //     resetCSS: false,
    //     /**
    //      * @property {boolean} [isUsingColorMode=true]
    //      * if false, this plugin will not use <ColorModeProvider />
    //      */
    //     isUsingColorMode: true,
    //   },
    // },
  ],
};
