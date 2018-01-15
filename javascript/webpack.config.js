var path = require('path');

var config = {
    // devtool: 'cheap-module-inline-source-map',
    devtool: 'source-map',
    entry: ['babel-polyfill', path.resolve(__dirname, './es6/es6_code.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader'
            },
        ]
    }
}

module.exports = config;