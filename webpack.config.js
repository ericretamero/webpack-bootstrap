const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/",
                options: {
                    presets: ['es2016']
                }
            }
        ]
    }

}