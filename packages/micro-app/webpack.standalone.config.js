/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/standalone_index.tsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        libraryTarget: 'umd'
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
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './templates/index.html',
            title: 'Micro App Stand-Alone version',
            filename: 'index.html'
        })
    ]
};
