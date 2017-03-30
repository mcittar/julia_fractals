module.exports = {
    entry: "./lib/root.js",
    output: {
        filename: "./lib/bundle.js"
    },
    resolve: {
      extensions: ['.js', '.jsx', '*']
    },
    devtool: 'source-maps'
};
