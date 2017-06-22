const Merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const CommonConfig = require('./webpack.config.common');


module.exports = Merge(CommonConfig, {
    devServer: {
        port: 7777,
        hot: true, // Tell the dev-server we're using HMR
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
    ]
})