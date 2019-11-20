/* eslint-disable @typescript-eslint/no-var-requires */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/microapp_index.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'micro-app.js',
        libraryTarget: 'system'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' },
            { test: /\.js$/, use: ['source-map-loader'], enforce: 'pre' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
};
