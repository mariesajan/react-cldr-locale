const path = require('path');

module.exports = {
  context: __dirname,
  entry: './app/jsx/main.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['react-html-attrs']
      }
    }, {
      test: /\.json$/,
      loader: 'json-loader',
      exclude: /node_modules/,
    }]
  },
  output: {
    path: path.join(__dirname, 'app', 'public'),
    filename: 'bundle.js'
  }
};
