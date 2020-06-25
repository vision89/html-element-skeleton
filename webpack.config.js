const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

/**
 * TODO: Update with your library name
 */
const libraryName = 'helloworld';
const outputFile = `${libraryName}.min.js`;

module.exports = {
    entry: './src/index.js',
    output: {
        library: libraryName,
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        filename:outputFile,
    },
    devtool: "source-map",
   module: {
    rules: [
        {
          test: /\.scss$/i,
          use: ['css-loader', {
            loader: "postcss-loader",
            options: {
                sourceMap: true,
            },
            },
            {
                loader: "sass-loader",
                options: {
                    sourceMap: true
                }
            },],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        sourceMap: true
                    }
                }
            ],
        },
        {
            test: /\.(png|svg|jpg|gif|jpeg)$/,
            use: [
                'file-loader',
            ],
        },
    ],
   },
    plugins: [
        new uglifyJsPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')}),
        new webpack.HotModuleReplacementPlugin(),
    ],
};