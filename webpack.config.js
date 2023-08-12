const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const bundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = {
    context: __dirname,
    node: false,
    entry: {
        index: ['./src/index.ts']
    },
    amd: {
        toUrlUndefined: true
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: "js/chunks/[name].[contenthash].js",
        libraryTarget: "umd",
        library: "QEAPP",
    },
    module: {
        unknownContextCritical: false,
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                    configFile: "tsconfig.json"
                }
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|riv)$/i,
                type: "asset/resource",
            },
        ]
    },
    resolve: {
        fallback: {
            fs: false,
            http: false,
            https: false,
            zlib: false,
            Buffer: false
        },
        extensions: [".ts", ".tsx", ".js"]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            maxSize: 500000,
            minSize: 200000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                    maxSize: 500000,
                    minSize: 200000,
                },
            },
        },
        minimize: true,
    },
    // devtool: 'source-map',
    devServer: {
        static: {
            directory: __dirname
        },
        hot: true,
        compress: true,
        port: 8009,
        host: "0.0.0.0"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html',
            chunksSortMode: "none",
            inlineSource: ".(css)$",
        }),
        // new bundleAnalyzerPlugin(),
    ],
    externals: {
        'cesium': {
            root: "Cesium",
            commonjs: "cesium",
            commonjs2: "cesium",
            amd: "cesium"
        },
        "mapbox-gl": {
            root: "mapboxgl",
            commonjs: "mapbox-gl",
            commonjs2: "mapbox-gl",
            amd: "mapbox-gl"
        },
    }
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        config.optimization.minimize = false;
    }
    return config;
};