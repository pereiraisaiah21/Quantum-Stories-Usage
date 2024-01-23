const path = require('path')

module.exports = {
    entry: './src/App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public/dist'),
        publicPath: '/dist/',
      },
    mode: 'development',
}
