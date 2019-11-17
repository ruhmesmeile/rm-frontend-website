module.exports = require('@rm-frontend-website/instance').extend({
  // all paths are relative to this file, if not specified otherwise
  paths: {
    // compilation target
    public: 'public',

    // public asset paths (relative to `paths.public`)
    publicJs: 'path/to/js',
    publicCss: 'path/to/css',
    publicFonts: 'path/to/fonts',
  },
});
