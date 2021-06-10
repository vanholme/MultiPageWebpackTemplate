const webpack = require('webpack')
const { merge } = require('webpack-merge')

const common = require('./webpack.common')
const paths = require('./paths')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: paths.dist,
        open: true,
        liveReload: true,
        port: 8080
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
})