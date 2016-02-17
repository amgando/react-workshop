var path = require('path');
var config = {
  entry:  {
    'examples-a': path.resolve(__dirname, 'src/examples-a.js'),
    'examples-b': path.resolve(__dirname, 'src/examples-b.js'),
    'examples-c': path.resolve(__dirname, 'src/examples-c.js')

  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js",
    publicPath: "/"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};


module.exports = config;