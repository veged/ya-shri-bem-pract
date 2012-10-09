var PATH = require('path'),
    extend = require('bem/lib/util').extend,

    BEM_TECHS = '../../bem-bl/blocks-common/i-bem/bem/techs';


// Declare tech names and corresponding modules for bundles levels
exports.getTechs = function() {

    return {
            'bemjson.js': '',
            'bemdecl.js': 'bemdecl.js',
            'js': 'js-i',
            'bemhtml.js': PATH.join(BEM_TECHS, 'bemhtml.js'),
            'html': PATH.join(BEM_TECHS, 'html.js'),
            'ie6.css': 'ie6.css',
            'ie7.css': 'ie7.css',
            'ie8.css': 'ie8.css',
            'ie9.css': 'ie9.css'
        };

};

// Do not create any techs files during bundle creation by default
exports.defaultTechs = [];

//Various level configuration
exports.getConfig = function() {

    return extend({}, this.__base() || {}, {
        bundleBuildLevels: this.getBundleBuildLevels()
    });

};

// Configure bundle build levels
exports.getBundleBuildLevels = function() {

    return this.resolvePaths([
        '../../bem-bl/blocks-common',
        '../../bem-bl/blocks-desktop',
        '../../blocks'
        ]);

};
