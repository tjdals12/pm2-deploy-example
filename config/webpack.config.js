const path = require('path');
const WebpackNodeExternals = require('webpack-node-externals');
const { EnvironmentPlugin } = require('webpack');
const paths = require('./paths');

module.exports = {
    name: 'for production',
    mode: 'production',
    devtool: 'cheap-module-source-map',
    externals: [WebpackNodeExternals()],
    resolve: {
        extensions: paths.moduleFileExtensions.map(ext => `.${ext}`),
        modules: ['node_modules'].concat(
            process.env.NODE_PATH.split(path.delimiter).filter(Boolean),
        ),
    },
    plugins: [
        new EnvironmentPlugin({
            PORT: process.env.PORT,
        }),
    ],
    entry: {
        server: ['./src/server'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
        ],
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
    },
};
