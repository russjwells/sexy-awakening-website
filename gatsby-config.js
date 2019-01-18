module.exports = {
  siteMetadata: {
    title: 'Sexy Awakening',
    tagLine: 'Swipe with intention!'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131525485-2",
        head: true,
      },
    },
  ],
}
