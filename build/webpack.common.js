const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const paths = require('./paths')

module.exports = {
    entry: {
        index: paths.src + '\\index.js'
    },
    output: {
        filename: `${paths.assets}js/[name].js`,
        path: paths.dist,
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 1,
            minChunks: 2
        }
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: paths.src + '\\pug\\page.pug', 
            filename: 'index.html', // название выходного файла
            inject: 'body'
        }),
        new MiniCSSExtractPlugin({
            filename: `${paths.assets}css/[name].css`
        }),
    ],
}