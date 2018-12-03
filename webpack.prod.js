'use strict';

const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'home', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: path.join('bundle.[name].[chunkhash].[contentHash].js'),
        hashDigestLength: 32
    },
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
    resolve: {
        modules: [
            'node_modules'
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new UglifyJsPlugin({
            extractComments: /^\**|@preserve|@liscence|@cc_on/i,
            sourceMap: false,
            parallel: 7
        }),
        new CleanWebpackPlugin([ path.resolve(__dirname, 'dist') ], { verbose: true }),
        new MiniCssExtractPlugin({
            filename: path.join('style.[name].[chunkhash].[contentHash].css'),
            chunkFilename: '[id].[hash].css'
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
};