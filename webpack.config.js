var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: __dirname + '/src/static.js',
    output: {
        path: __dirname + '/build',
        filename: 'vue-datetime-selector.js'
    },
    plugins: [
        new ExtractTextPlugin('vue-datetime-selector.css?[contenthash]'),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: '"production"'
        //     }
        // }),
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
        // alias: {
        //     'vue': 'vue/dist/vue.js'
        // }
    }
};