module.exports = {
  siteMetadata: {
    title: 'Nest Seekers International',
    description: 'Nest Seekers International',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-less',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
      },
    },
  ],
}
