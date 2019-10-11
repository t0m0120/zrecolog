module.exports = {
  siteMetadata: {
    title: `recolog`,
    author: `t0m0120`,
    description: `t0m0120の個人開発ブログ`,
    siteUrl: `https://recolog.tokyo/`,
    social: {
      twitter: `t0m0120`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
        name: `thumbnail`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-85456745-5`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `recolog`,
        short_name: `recolog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#21CC99`,
        display: `minimal-ui`,
        icon: `content/assets/Frame.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        classPrefix: 'language-',
        inlineCodeMarker: null,
        aliases: {},
        showLineNumbers: true,
        noInlineHighlight: false,
      },
    },
    'gatsby-plugin-sitemap',
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-5441589109590198`
      },
    },
  ],
}
