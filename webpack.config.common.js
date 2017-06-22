var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: '[name].map',
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpeg|jpg|ico|gif|svg|bmp)$/,
            use: ['file-loader']
        }, {
            test: /\.(eot|otf|ttf|woff|woff2)$/,
            use: ['file-loader']
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            favicon: './src/assets/favicon.ico'
        })
    ]
};