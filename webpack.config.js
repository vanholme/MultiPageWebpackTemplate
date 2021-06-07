const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, '/src'),
    dist: path.join(__dirname, '/dist'),
    assets: 'assets/'
}

module.exports = {
    entry: {
        index: PATHS.src + '\\index.js'
    },
    output: {
        path: PATHS.dist,
        filename: '[name].js' 
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 1,
            minChunks: 2
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.src + '\\template.html', 
            filename: 'index.html', // название выходного файла
            inject: 'body'
        }),
    ],
}