const env = process.env.NODE_ENV || 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: env,
    entry: ['./src/js'], // this is where our app lives
    devtool: 'source-map', // this enables debugging with source in chrome devtools
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 
                    {loader: 'babel-loader'} 
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: './index.html',
            favicon: './src/images/dartmouth_gradient_logo.png',
        }),
    ],
};

