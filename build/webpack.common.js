const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

module.exports = {
    entry: {
        index: paths.src + '\\index.js'
    },
    output: {
        path: paths.dist,
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
            template: paths.src + '\\template.html', 
            filename: 'index.html', // название выходного файла
            inject: 'body'
        }),
    ],
}