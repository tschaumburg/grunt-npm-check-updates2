/*
 * grunt-jsonconst
 * https://github.com/Thomas/grunt-jsonconst
 *
 * Copyright (c) 2016 tschaumburg
 * Licensed under the MIT license.
 */

'use strict';

class Options
{
    public dev: boolean = false; // check only devDependencies')
    public errorLevel: number = 1; //set the error-level. 1: exits with error code 0 if no errors occur. 2: exits with error code 0 if no packages need updating (useful for continuous integration). Default is 1.', cint.partialAt(parseInt, 1, 10), 1)
    public filter: string = ''; // include only package names matching the given string, comma-delimited list, or regex')
    public global: boolean = false; // check global packages instead of in the current project')
    // program.json is set to true in programInit if any options that begin with 'json' are true
    public jsonAll: boolean = false; // output new package file instead of human-readable message')
    public jsonUpgraded: boolean = false; // output upgraded dependencies in json')
    public loglevel: string = 'warn'; //what level of logs to report: silent, error, minimal, warn, info, verbose, silly (default: warn)', 'warn')
    public packageManager: string = 'npm'; // <name>', 'npm (default) or bower', 'npm')
    public newest: boolean = false; // find the newest versions available instead of the latest stable versions')
    public optional: boolean = false; // check only optionalDependencies')
    public packageData: boolean = false; // include stringified package file (use stdin instead)')
    public packageFile: string = './package.json'; // package file location (default: ./package.json)')
    public packageFileDir: boolean = false; // use same directory as packageFile to compare against installed modules. See #201.')
    public prod: boolean = false; // check only dependencies (not devDependencies)')
    public peer: boolean = false; // check only peerDependencies')
    public registry: string; // <url>', 'specify third-party npm registry')
    public silent: boolean = false; // don't output anything (--loglevel silent)")
    public greatest: boolean = false; // find the highest versions available instead of the latest stable versions')
    public timeout: number; //a global timeout in ms')
    public upgrade: boolean = false; // overwrite package file')
    public reject: string = ''; // exclude packages matching the given string, comma-delimited list, or regex')
    public upgradeAll: boolean = false; // include even those dependencies whose latest version satisfies the declared semver dependency')
    public semverLevel: string ; // <level>', 'find the highest version within "major" or "minor"')
    public removeRange: boolean = false; // remove version ranges from the final package version')
    public syncWrite: boolean = false;
    public args: string[] = [];
}
module.exports = function (grunt: any)
{
    grunt.registerMultiTask('check_package_update2', 'Task converting', function ()
    {
         var done = this.async();
        var options: Options = this.options(new Options());
        //options.syncWrite = true;

        var lncu = require('npm-check-updates/lib/npm-check-updates');
        lncu.run(options)
            .then(() => { setTimeout(() => { done(true); }, 2000); }) // really ugly 2 sec delay - necessary due to a race conditio in npm-check-update
            .catch(function (reason: any) { done(false); });
    });
}

namespace impl
{
    export function callGenerate(
        options: Options
    ): void
    {
        var ncu = require('npm-check-updates/lib/npm-check-updates');
        ncu.run(options);
        //    {
        //        u: false,
        //        cli: true,
        //        args: [], 
        //        filter: '/^(breezets).*$/',
        //        Path: ''
        //    }
        //);
    }
}