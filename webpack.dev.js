'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                            hmr: true,
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
            filename: path.join('[name]', 'index.html')
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'form', 'index.pug'),
            filename: path.join('[name]', 'index.html')
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'result', 'index.pug'),
            filename: path.join('[name]', 'index.html')
        })
    ],
    devServer: {
        contentBase: './dist',
        port: 8080
    }
});
