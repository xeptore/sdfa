'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            camelCase: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceComments: true,
                            sourceMap: true,
                            sourceMapContents: true,
                            outputStyle: 'expanded',
                            includePaths: [
                                './node_modules'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: '../assets/fonts',
                            outputPath: 'assets/fonts'
                        }
                    },
                ]
            },
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-image-src', 'img:src', 'a:href']
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|svg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: '../assets/images',
                            outputPath: 'assets/images'
                        }
                    },
                ]
            },
            {
                test: /\.(pug)/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: {
                            pretty: true
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'home', 'index.pug'),
            filename: path.join('home', 'index.html'),
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'form', 'index.pug'),
            filename: path.join('form', 'index.html'),
            chunks: ['form']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'result', 'index.pug'),
            filename: path.join('result', 'index.html'),
            chunks: ['result']
        }),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        contentBase: './dist',
        port: 8080
    }
});
