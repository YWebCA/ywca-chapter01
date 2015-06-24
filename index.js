var Jasmine = require('jasmine')
var jasmine = new Jasmine()

console.log(__dirname)
console.log(process.cwd())

jasmine.loadConfig({
    spec_dir: 'node_modules/ywca-chapter01/spec/',
    spec_files: [
        'spec.js'
    ],
    helpers: [
        'environment.js',
        '../../../chapter01/index.js'
    ]
});

jasmine.execute()