const webpack = require("webpack");
const path = require("path");

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    filenameHashing: false,
    productionSourceMap: false,
    lintOnSave: false,
    parallel: false,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                cash: "cash-dom",
                Popper: "@popperjs/core"
            }),
            // new BundleAnalyzerPlugin()
        ]
    },
    chainWebpack: config => {
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
    }
};