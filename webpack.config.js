const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


// web need vue-loader
const plugins = [
  new ExtractTextPlugin("styles.css"),
  new webpack.BannerPlugin({
    banner: '// { "framework": "Vue" } \n',
    raw: true,
    exclude: 'Vue'
  })
];
const webConfig = {
  context: path.join(__dirname, ''),
  entry: { 'index': path.resolve('src', 'entry') },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].web.js',
  },
  module: {
    // webpack 2.0 
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules(?!(\/|\\).*(weex).*)/
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        use: [{
          loader: 'vue-loader'
        }]
      }
    ]
  },
  plugins: plugins
};
const weexConfig = {
  entry: { 'index': path.resolve('src', 'entry') },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].weex.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules(?!(\/|\\).*(weex).*)/
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        use: [{
          loader: 'weex-loader'
        }]
      },
      {
        test: /\.we(\?[^?]+)?$/,
        use: [{
          loader: 'weex-loader'
        }]
      }
    ]
  },
  plugins: plugins,
};

var exports = [webConfig, weexConfig];

module.exports = exports;
