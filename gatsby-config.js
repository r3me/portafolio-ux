module.exports = {
  pathPrefix: "/portafolio-ux",
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Amelia Estrada | UX Portafolio',
        short_name: 'Amelia UX',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
