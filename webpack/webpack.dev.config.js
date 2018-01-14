const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: [
        path.resolve(__dirname, '../src/index.js')
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'scss-loader']
        }]
    },
    output: {
        path: path.resolve(__dirname,'../public'),
        filename: 'bundle.js'
    },
    devServer: {
        port:3001,
        inline:true,
        contentBase: path.resolve(__dirname,"../public/")
    }
}