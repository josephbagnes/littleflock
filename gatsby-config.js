const navConfig = {
  'Little Flock Song Book': {
    url: 'https://littleflock-songbook.netlify.app',
    description:
      'Praise and Worship'
  }
};

const footerNavConfig = {};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-guitar-book`,
      options: {
        root: __dirname,
        siteName: 'Little Flock Song Book',
        description: 'Praise and Worship',
        pageTitle: 'Little Flock Song Book',
        subtitle: 'Praise and Worship',
        menuTitle: 'Songs Types',
        contentDir: 'content',
        sidebarCategories: {
          null: ['index']
        },
        navConfig,
        footerNavConfig
      }
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        cache: true,
        fix: true,
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    }
  ]
};
