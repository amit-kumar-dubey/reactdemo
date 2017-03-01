module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loaders: ["style-loader", "css-loader"] },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader:'babel-loader',
                query:{
                    presets:['es2015','react'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
};