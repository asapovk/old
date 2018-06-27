module.exports = config => {

    config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader'
    });

    config.module.rules.push({
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    });

    config.module.rules.push({
        test: /\.(css|scss)$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: false,
                    javascriptEnabled: true
                }
            }
        ]
    });

    config.resolve.extensions = ['.js', '.jsx'];

    return config;
};