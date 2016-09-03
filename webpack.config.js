const path = require('path');

module.exports = {
  entry: './app/jsx/main.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['react-html-attrs']
      }
    }]
  },
  output: {
    path: path.join('app', 'public'),
    filename: 'bundle.js'
  }
};
