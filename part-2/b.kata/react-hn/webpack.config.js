var path = require('path');

var config = {
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: "app.js",
    publicPath: "/js/"
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