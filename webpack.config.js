const path = require('path');
const webpack = require('webpack');


// web need vue-loader
const plugins = [
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
