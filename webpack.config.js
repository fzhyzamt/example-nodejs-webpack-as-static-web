const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // https://webpack.js.org/concepts/entry-points/#multi-page-application
    entry: {
        first: './src/first.ts',
        second: './src/second.ts',
        third: './src/third.ts'
    },

    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        port: 8081
    },

    // https://webpack.docschina.org/configuration/module/
    module: {
        rules: [
            {
                // https://webpack.docschina.org/guides/typescript/
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    // https://webpack.docschina.org/loaders/
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },

    // https://webpack.js.org/concepts/plugins/
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/first.html',
            inject: true,
            chunks: ['first'], // 这里指定依赖的entry
            filename: 'first.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/second.html',
            inject: true,
            chunks: ['second'],
            filename: 'second.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/third.html',
            inject: true,
            chunks: ['third'],
            filename: 'third.html'
        })
    ]
};