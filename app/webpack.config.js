var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/App.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.less/,
        loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 8000,
            publicPath: 'public/',
            outputPath: 'images/',
            name: '[hash]-[name].[ext]'
          }
        }]
      }
    ]
  }
};

module.exports = config;
