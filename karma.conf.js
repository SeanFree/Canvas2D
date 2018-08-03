let webpackConfig = require('./webpack.config');

module.exports = config => {
    config.set({
        logLevel: config.LOG_INFO,
        singleRun: true,
        browsers: ['PhantomJS'],
        files: [
            { pattern: './src/test/*.spec.js', watched: false }
        ],
        frameworks: ['mocha', 'chai'],
        preprocessors: {
            './dist/bundle.js': ['webpack'],
            './src/test/*.spec.js': ['webpack', 'babel'],
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            },
            filename: function (file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function (file) {
                return file.originalPath;
            }
        },
        reporters: ['mocha'],
        plugins: [
            'karma-babel-preprocessor',
            'karma-chai',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-phantomjs-launcher',
            'karma-webpack'
        ]
    });
};