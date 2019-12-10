module.exports = require('@rm-frontend-website/instance').extend({
  // all paths are relative to this file, if not specified otherwise
  paths: {
    // compilation target
    public: 'dist',

    // patternlab location
    patternlab: 'patternlab',

    // public asset paths (relative to `paths.public`)
    publicJs: 'js',
    publicCss: 'css',
    publicFonts: 'fonts',
    publicImages: 'images',
  },
  modules: {
    '@rm-frontend/base': {
      sidebar: 'fixed'
    }
  }
});
