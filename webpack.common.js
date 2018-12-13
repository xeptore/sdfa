'use strict';

const path = require('path');

module.exports = {
    entry: {
        // about: path.resolve(__dirname, 'src', 'pages', 'about', 'index.js'),
        home: path.resolve(__dirname, 'src', 'pages', 'home', 'index.js'),
        // form: path.resolve(__dirname, 'src', 'pages', 'form', 'index.js'),
        // result: path.resolve(__dirname, 'src', 'pages', 'result', 'index.js')
    },
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: path.join('[name]', 'bundle.[contentHash].js'),
        hashDigestLength: 32,
    },
    resolve: {
        modules: [
            'node_modules'
        ],
        alias: {
            vue: 'vue/dist/vue'
        }
    },
    plugins: []
};
