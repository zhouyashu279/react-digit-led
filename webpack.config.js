const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'digitled.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.TTF$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: './led-font.[ext]'
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'react app',
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}