const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var staticDir = path.resolve(__dirname, 'dist/');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './src/app.js',
    output: {
        path: staticDir,
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        HtmlWebpackPluginConfig
    ]
};