const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    plugins: [ new BundleAnalyzerPlugin() ]
};

module.exports = config;