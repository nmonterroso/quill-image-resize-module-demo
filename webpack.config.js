module.exports = {
    entry: "./src/index.js",
    target: "web",
    output: {
        path: __dirname,
        filename: "compiled.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: `${__dirname}/src`,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        "presets": [["es2015", { "modules": false }]],
                        "plugins": ["babel-plugin-transform-class-properties"]
                    }
                }]
            }
        ]
    }
};
