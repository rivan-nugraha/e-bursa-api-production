const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: './src/main.ts',
    target: 'node',
    mode: 'development',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
//# sourceMappingURL=webpack.config.js.map