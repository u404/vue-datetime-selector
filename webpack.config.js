var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');


module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
        chunkFilename: '[name].js',
        //publicPath: './'
    },
    //devtool: 'eval-source-map',
    // devServer: {
    //     contentBase: './build',
    //     port: 8088,
    //     inline: true,
    //     historyApiFallback: true,
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.template.html'
        }),
        new ExtractTextPlugin('css/[name].css?[contenthash]'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(["css-loader", "postcss-loader"])
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};