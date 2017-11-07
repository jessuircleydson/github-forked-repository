const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /(node_modules)/,
       use: {
         loader: 'babel-loader'
       }
     }
   ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Atlassian React',
      filename: 'index.html',
      template: './index.html'
    }) 
  ],
  devServer: {
    contentBase: './dist'
  }
}
