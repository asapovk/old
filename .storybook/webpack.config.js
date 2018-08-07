const path = require("path");
const Fiber = require('fibers');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [{
      loader: "style-loader"
    }, {
      loader: "css-loader"
    }, {
      loader: "sass-loader",
      options: {
        implementation: require("dart-sass"),
        fiber: Fiber
      }
    }]
  });

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};