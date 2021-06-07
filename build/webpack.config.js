const path = require('path')

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

module.exports = {
    entry: {
        index: PATHS.src + '/index.js'
    },
    output: {
        path: PATHS.dist,
        __filename: '[name].js' 
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 1,
            minChunks: 2
        }
    }
}