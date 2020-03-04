const path = require('path');

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.sass'),
        // or if you use scss
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, './src/assets/sass/*.sass'),
        // or scss
        path.resolve(__dirname, './src/assets/sass/*.scss'),
        path.resolve(__dirname, './src/components/*.vue')
      ]
    });
}

module.exports = {
  siteName: 'VS Web Admin',
  siteUrl: 'https://github.com/tharin2002/vsweb',
  pathPrefix: '',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        route: '/:slug',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-copy-build',
      options: {
        targetDir: path.resolve(__dirname, '../vs/assets/httpgateway/'),
        verbose: true
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
      grayMatter: {
        excerpt: true
      }
    }
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  chainWebpack: config => {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    config.mode('development')

    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type));
    });

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });
  }
};
