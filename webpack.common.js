const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    filename: '[name].bundle.js',
    // chunkFilename: '[name].chunk',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      store: path.resolve(__dirname, 'src/store'),
      routes: path.resolve(__dirname, 'src/routes'),
      styles: path.resolve(__dirname, 'src/styles'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      utilities: path.resolve(__dirname, 'src/utilities'),

      // Has to go at the end, some weird webpack behaviour
      public: path.resolve(__dirname, 'public/')
    },
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['source-map-loader'],
        enforce: 'pre'
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader', // 4. translates CSS into CommonJS
            options: {
              sourceMap: true,
              importLoaders: true
            }
          },
          {
            loader: 'postcss-loader', // 3. Adds CSS prefixes
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', // 1. Compiles Sass to CSS
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     { loader: 'css-loader' },
      //     { loader: 'postcss-loader' }, // Adds css prefixes
      //   ]
      // },
      {
        type: 'javascript/auto',
        test: /\.(svg|json)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'raw-loader'
      },
      {
        // Other images may change so we might need to include a hash
        test: /\.(png|jpg|gif|ico|svg)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // This can be changed to include [hash:8], (:8 should restrict it to 8 characters)
              name: 'public/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // HtmlWebpackPlugin generates a dynamic index.html file which inserts all our script tags declared above in entry
      template: path.resolve(__dirname, 'src/index.html'), // You can add [chunkhash] to the index.html file as well
      filename: 'index.html', // Output filename
      inject: 'body', // Where the scripts will be inserted (concat with what's already in body)
      files: {
        // Require manifest first as it includes webpack file references
        js: ['dist/index.js']
      }
    }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css'
      // chunkFilename: "[id].css"
    })
  ]
};
