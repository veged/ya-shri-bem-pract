/**_*/

MAKE.decl('Arch', {

    getLibraries: function() {

        return {
            'bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                treeish: '0.3'
            },
            'bem-typo': {
                type: 'git',
                url: 'git://github.com/narqo/bem-bl-pages.git',
                treeish: 'bem-typo'
            },
            'b-socials': {
                type: 'git',
                url: 'https://bitbucket.org/vii/b-socials.git',
                treeish: 'master'
            }
        };

    }

});

MAKE.decl('BundleNode', {

    getTechs: function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml.js',
            'js',
            'css',
            'html'
        ];
    }

});
