const path = require('path')
const common = require('./webpack.common')
const {merge} = require('webpack-merge')

module.exports =merge(common, {
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },
    mode: 'development',

})