module.exports = {
    entry: {
        index: "./src/main/js/pages/MainPage.js"
    },
    devtool: "sourcemaps",
    cache: true,
    mode: "development",
    output: {
        path: __dirname,
        filename: "./src/main/resources/static/built/[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                }]
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader", {
                    loader: "postcss-loader",
                    options: {
                        plugins: function () {
                            return [
                                require("autoprefixer")
                            ];
                        }
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            "react-dom$": "react-dom/profiling",
            "scheduler/tracing": "scheduler/tracing-profiling",
        }
    }
};