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