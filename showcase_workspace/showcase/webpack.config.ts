var path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: {
        app: [__dirname + "/src/index.tsx"]
    },
    output: {
        filename: "showcase.js",
        path: __dirname + "/public"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            'webpack-dev-server/client': path.resolve(__dirname + '/node_modules/webpack-dev-server/client'),
        },
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                options: {
                    configFileName: __dirname + '/tsconfig.json'
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
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}