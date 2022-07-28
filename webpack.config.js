const path = require("path");
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const production = process.env.NODE_ENV === 'production';

module.exports = {
    mode: production ? "production" : "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[name][ext]'
    },
    devServer: {
        port: 5500,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ttf|eot|woff|woff2)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    production ? miniCss.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
        ]
    },
    
    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss"],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            helper: path.resolve(__dirname, 'src/helper'),
            views: path.resolve(__dirname, 'src/views'),
            styles: path.resolve(__dirname, 'src/styles'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/templates/index.html",
        }),
        new miniCss({
            filename: 'styles.css',
        }),
    ],
    stats: {
        children: false
   }
}