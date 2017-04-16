module.exports = {
    entry: "./lib/root.js",
    output: {
        filename: "./lib/bundle.js"
    },
    module: {
      loaders: [
        {
          test: [/\.jsx?$/, /\.js?$/],
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    devtool: 'source-maps'
};
