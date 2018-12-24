#!/usr/bin/env node
const path = require('path');
const program = require('commander');
const config = require("../../webpack.config.ts");
const webpack = require("webpack");
const webpackDevServer = require('webpack-dev-server');

config.entry.app.unshift("webpack-dev-server/client?http://localhost:9050/", "webpack/hot/dev-server");
const compiler = webpack(config);
const server = new webpackDevServer(compiler, {
    hot: true,
    contentBase: __dirname + "/../../public"
});

server.listen(9050);