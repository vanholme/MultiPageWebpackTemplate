const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: paths.src + '\\template.html', 
            filename: 'index.html', // название выходного файла
            inject: 'body'
        }),
        new MiniCSSExtractPlugin({
            filename: `${paths.assets}css/[name].css`
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
}