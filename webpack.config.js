var path = require('path');
module.exports = {
    mode: 'development',
    target: 'node',
    devtool: 'source-map',
    entry: [path.join(__dirname, '/src/main.ts')],
    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js'
    },
    module: {
        rules: [{
            // TypeScriptをコンパイル
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader'
            }
        }, {
            // javascriptをコンパイル
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};