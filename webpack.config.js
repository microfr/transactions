const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin');

const IS_DEV = process.env.NODE_ENV === 'development'

const externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
    'graphql': 'graphql',
    '@apollo/react-hooks': '@apollo/react-hooks',
    'apollo-boost': 'apollo-boost'
}

let webpackConfig = {
    entry: IS_DEV ? './Example.tsx' : './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            react: path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },

            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'scoped-css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        IS_DEV ?
            new HtmlWebpackPlugin({
                template: './index.html'
            }) : new ManifestPlugin()
    ].filter(x => x)
}

if (!IS_DEV) {
    webpackConfig = {
        ...webpackConfig,
        externals
    }
}

module.exports = webpackConfig
