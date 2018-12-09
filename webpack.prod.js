'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [{
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
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'compressed',
                            includePaths: [
                                './node_modules'
                            ]
                        }
                    },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts'
                }
            },
            {
                test: /\.(html)$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false
                    }
                }]
            },
            {
                test: /\.(jpe?g|png|svg)/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images'
                    }
                }, ]
            },
            {
                test: /\.(pug)/,
                use: [{
                    loader: 'pug-loader',
                    options: {
                        pretty: false
                    }
                }]
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            extractComments: /^\**|@preserve|@liscence|@cc_on/i,
            sourceMap: false,
            parallel: 7
        }),
        new CleanWebpackPlugin([ path.resolve(__dirname, 'dist') ], { verbose: true }),
        new MiniCssExtractPlugin({
            filename: path.join('style.[hash].css')
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.pug'),
            filename: path.join('index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeScriptTypeAttributes: true,
                removeRedundantAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inlineSource: '.(js|css)$',
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]
});