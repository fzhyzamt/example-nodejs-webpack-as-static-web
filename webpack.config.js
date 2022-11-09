const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // https://webpack.js.org/concepts/entry-points/#multi-page-application
    entry: {
        first: './src/first.js'
    },

    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        port: 8081
    },

    // https://webpack.js.org/concepts/plugins/
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/first.html',
            inject: true,
            chunks: ['first'],
            filename: 'first.html'
        })
    ]
};