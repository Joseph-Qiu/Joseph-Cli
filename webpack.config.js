const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
const TerserPlugin = require('terser-webpack-plugin')
const publicConfig = {
    // devtool: 'cheap-module-source-map',            
    entry:{
        app: [
            path.join(__dirname, 'src/index.js')
        ],
        common: ['vue', 'vue-router']
    }, 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ] 
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './static/css/[name].[contenthash:5].css',
            allChunks: true
        }),

    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "common",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        },
        minimizer: [
          new TerserPlugin({
            // sourceMap: true, // Must be set to true if using source-maps in production
            terserOptions: {
              compress: {
                drop_console: true, // 是否显示console
              },
            },
          }),
        ]
    },
};

module.exports = merge(commonConfig, publicConfig);