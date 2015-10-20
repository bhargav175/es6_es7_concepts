var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: {
        bundle : ['webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
            'webpack/hot/only-dev-server',
           './bin/index.js']
    },
    output: {
        filename: 'bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        path: path.join(__dirname, "dist"),
        publicPath: 'http://localhost:8080/assets/'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['babel-loader'],
                 include:[path.join(__dirname, "bin"),path.join(__dirname, "tools")]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};