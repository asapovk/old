#!/usr/bin/env node
const path = require('path');
const program = require('commander');
const config = require("../../webpack.config.ts");
const webpack = require("webpack");
const webpackDevServer = require('webpack-dev-server');

const options = {
    hot: true,
    host: 'localhost',
    contentBase: __dirname + "/../../public"
}

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(9050, 'localhost', () => {
    console.log('dev server listening on port 9050');
});