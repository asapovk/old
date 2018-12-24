#!/usr/bin/env node
const path = require('path');
const program = require('commander');
const Webpack = require("webpack");
const WebpackDevServer = require('webpack-dev-server');

const compiler = Webpack({
    mode: 'development',
    entry: __dirname + "/../../src/index.tsx",
    output: {
        filename: "showcase.js",
        path: __dirname + "/../../public"
    },
    watch: true,

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                options: {
                    configFileName: __dirname + '/../../tsconfig.json'
                },
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    "css-loader"
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
});

const server = new WebpackDevServer(
    compiler, {
        contentBase: __dirname + "/../../public",
        hot: true
    }
);

server.listen(9050, '0.0.0.0', () => {
    console.log('The Showcase running on port 9050');
});