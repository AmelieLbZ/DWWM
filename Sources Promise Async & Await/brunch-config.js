// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
}

exports.plugins = {
  babel: {presets: ['latest']},
  eslint: {
    pattern: /^app\/.*\.js?$/,
    warnOnly: true
  }
}

exports.modules = {
  autoRequire: {
    'app.js': ['app']
  }
}
