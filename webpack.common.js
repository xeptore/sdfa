'use strict';

const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'app.js')
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
