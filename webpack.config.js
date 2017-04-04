const path = require('path');
const webpack = require('webpack');

const moduleConfig = {
  rules: [{
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  }]
};

const devServerConfig = {
  contentBase: './'
};

module.exports = {
  entry: './examples/index.js',
  output: {
    path: path.resolve(__dirname, './examples'),
    publicPath: '/examples/',
    filename: 'build.js'
  },
  module: moduleConfig,
  devServer: devServerConfig,
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
