const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');
const merge = require('webpack-merge');
const devConfig  = {
    devtool: 'cheap-module-eval-source-map',
    entry: path.join(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ] 
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                  },
                  {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                  },
                  {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                  }
                ]
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port:"8899",
        hot: true,
        open:true
    },
};
module.exports = merge({
    customizeArray(a, b, key) {
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);