const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable import/no-extraneous-dependencies

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src'),
      options: {
        cacheDirectory: true,
        babelrc: true,
      },
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 100000,
      }
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      inject: true,
    }),
  ],
  devServer: {
    port: 3000,
  },
};
