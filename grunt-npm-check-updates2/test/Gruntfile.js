/*
 * grunt-check_package_update2
 * https://github.com/tschaumburg
 *
 * Copyright (c) 2017 tschaumburg
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');

module.exports = function (grunt)
{

    // Project configuration.
    grunt.initConfig({
        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        check_package_update2: {
            superdup: {
                options: {
                    loglevel: 'silly',
                    upgrade: true,
                    upgradeAll: true,
                    cli: true,
                    //syncWrite: true,
                    newest: true,
                    filter: '/^(breezet).*$/'
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('../tasks');

    grunt.registerTask('test', ['check_package_update2:superdup']);
    grunt.registerTask('default', ['test']);

};