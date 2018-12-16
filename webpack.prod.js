'use strict'

const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const WebpackVisualizerPlugin = require('webpack-visualizer-plugin')
const {
  VueLoaderPlugin
} = require('vue-loader')

const TemplateMeta = {
  viewport: { 'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no' },
  charset: { 'charset': 'UTF-8' }
}

// eslint-disable-next-line no-unused-vars
const minificationConfig = {
  collapseWhitespace: true,
  removeComments: true,
  removeScriptTypeAttributes: true,
  removeRedundantAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true
}

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: path.join('app.js')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: 'babel-loader'
    },
    {
      test: /\.scss$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {}
      },
      {
        loader: 'css-loader',
        options: {}
      },
      {
        loader: 'postcss-loader',
        options: {}
      },
      {
        loader: 'resolve-url-loader',
        options: {}
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          outputStyle: 'compressed',
          includePaths: [
            './node_modules'
          ]
        }
      }
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: 'assets/fonts',
        outputPath: 'assets/fonts'
      }
    },
    {
      test: /\.(jpe?g|png|svg)/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: 'assets/images',
          outputPath: 'assets/images'
        }
      } ]
    },
    {
      test: /\.pug$/,
      loader: 'pug-plain-loader'

    }
    ]
  },
  plugins: [
    new WebpackVisualizerPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: true,
      generateStatsFile: true,
      statsFilename: path.join('analyzer', 'stats.json'),
      reportFilename: path.join('analyzer', 'report.html')
    }),
    new UglifyJsPlugin({
      extractComments: /^\**|@preserve|@liscence|@cc_on/i,
      sourceMap: false,
      parallel: 7
    }),
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')], {
      verbose: true
    }),
    new MiniCssExtractPlugin({
      filename: path.join('style.css'),
      chunkFilename: '[id].css'
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: path.join('index.html'),
      chunks: ['main'],
      meta: TemplateMeta
    })
  ]
})
