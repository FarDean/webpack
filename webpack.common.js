const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    entry: ['./src/index.js'],
    module: {
        rules:[
            {
                test:/\.js?$/,
                exclude: /node_modules/,
                use:['babel-loader']
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/template.html'
        })
    ]

}