var DashboardPlugin = require('webpack-dashboard/plugin');

const config = {
    plugins: [
        new DashboardPlugin()
    ]
};

module.exports = config;