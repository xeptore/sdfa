'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new UglifyJsPlugin({
            extractComments: /^\**|@preserve|@liscence|@cc_on/i,
            sourceMap: false,
            parallel: 7
        }),
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist')], {
            verbose: true
        }),
        new MiniCssExtractPlugin({
            filename: path.join('[name]', 'style.[hash].css'),
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, 'src', 'pages', 'home', 'index.pug'),
            filename: path.join('home', 'index.html'),
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, 'src', 'pages', 'form', 'index.pug'),
            filename: path.join('form', 'index.html'),
            chunks: ['form']
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, 'src', 'pages', 'result', 'index.pug'),
            filename: path.join('result', 'index.html'),
            chunks: ['result']
        })
    ]
});