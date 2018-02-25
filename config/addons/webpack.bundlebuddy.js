const BundleBuddyWebpackPlugin = require('bundle-buddy-webpack-plugin');

module.exports = {
    plugins: [
        new BundleBuddyWebpackPlugin({ sam: true })
    ]
};