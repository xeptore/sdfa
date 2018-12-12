'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const TemplateMeta = {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
}

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [{
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: [{
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
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true,
                            keepQuery: true,
                            debug: true
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
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '../assets/fonts',
                    outputPath: 'assets/fonts'
                }
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader',
                options: {
                    attrs: [':data-image-src', 'img:src', 'a:href']
                }
            },
            {
                test: /\.(jpe?g|png|svg)/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '../assets/images',
                    outputPath: 'assets/images'
                }
            },
            {
                test: /\.(pug)/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'home', 'index.pug'),
            filename: path.join('home', 'index.html'),
            chunks: ['home'],
            meta: TemplateMeta,
            templateParameters: {
                PAGE: 'home'
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'form', 'index.pug'),
            filename: path.join('form', 'index.html'),
            chunks: ['form'],
            meta: TemplateMeta,
            templateParameters: {
                PAGE: 'form'
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'result', 'index.pug'),
            filename: path.join('result', 'index.html'),
            chunks: ['result'],
            meta: TemplateMeta,
            templateParameters: {
                PAGE: 'result'
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'about', 'index.pug'),
            filename: path.join('about', 'index.html'),
            chunks: ['about'],
            meta: TemplateMeta,
            templateParameters: {
                PAGE: 'about'
            }
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ],
    devServer: {
        contentBase: './dist',
        port: 8080
    }
});