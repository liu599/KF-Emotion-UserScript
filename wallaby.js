module.exports = function (wallaby) {
    
    var wallabify = require("wallabify");
    var wallabyPostprocessor = wallabify({
        entryPatterns: [
            "test/**/*.test.js"
        ]
    });
    
    return {
        files : [
            { pattern: 'source/**/*.ts', load: false },
            { pattern: 'source/**/*.tsx', load: false }
        ],
        tests: [
        { pattern: 'test/**/*.test.ts', load: false }
        ],
        testFramework: 'mocha',
        postprocessor: wallabyPostprocessor,
        setup: function () {
        window.__moduleBundler.loadTests();
        }
    };
};