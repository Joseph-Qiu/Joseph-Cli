const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const commonConfig  = {
    output: {
        path: path.join(__dirname, './dist'),
        filename: './static/js/[name].[hash].js',
        chunkFilename: './static/js/[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:/node-modules/
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'index.html')
        }),
        new CleanWebpackPlugin(),
    ],
    resolve:{
        alias: {
            "vue": 'vue/dist/vue.js',
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            assets:path.join(__dirname,'src/assets')
        }
    },
};
module.exports = commonConfig;