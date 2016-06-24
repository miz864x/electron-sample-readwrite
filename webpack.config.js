var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  entry: './src/index.jsx',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        text: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'react'] }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  externals: {
    electron: 'require("electron")'
  }
}

module.exports = config
