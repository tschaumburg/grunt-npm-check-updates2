`grunt-npm-check-updates2` is a grunt task for running the `ncu` command *without* having to install `npm-check-updates` as a global package.

Installation
--------------

First install the package by running the following command:

```sh
npm install grunt-npm-check-updates2 -D
```

Then load the task in your `Gruntfile.js`:
```
grunt.loadNpmTasks('grunt-npm-check-updates2');
```

Usage
--------------

```
module.exports = function (grunt)
{
    grunt.initConfig({
        check_package_update2: {
            superdup: {
                options: {
                    loglevel: 'silly',
                    upgrade: true,
                    upgradeAll: true,
                    cli: true,
                    newest: true,
                    filter: '/^(myprefix-).*$/'
                }
            }
        }
    });
};
```

## Options

The grunt task accepts the same parameters as the `ncu` command:

    filter             include only package names matching the given string, 
                             comma-delimited list, or regex
    global             check global packages instead of in the current project
    help               output usage information
    packageManager     npm or bower (default: npm)
    registry           specify third-party NPM registry
    upgrade            overwrite package file
    reject             exclude packages matching the given string, comma-
                             delimited list, or regex
    version            output the version number

Advanced Options
--------------

Do not use these unless you know what you are doing! Not needed for typical usage.

    dev                check only devDependencies
    error-level        set the error-level. 1: exits with error code 0 if no
                             errors occur. 2: exits with error code 0 if no
                             packages need updating (useful for continuous
                             integration)
    jsonAll            output new package file instead of human-readable
                             message
    jsonUpgraded           output upgraded dependencies in json
    loglevel           what level of logs to report: silent, error, warn, 
                             info, verbose, silly (default: warn)
    prod               check only dependencies (not devDependencies)
    packageData            include stringified package file (use stdin instead)
    packageFile            package file location (default: ./package.json)
    packageFileDir         use same directory as packageFile to compare against 
                             installed modules. See #201.
    newest             find the newest published versions available instead 
                             of the latest stable versions
    optional           check only optionalDependencies
    peer                   check only peerDependencies
    silent             don't output anything (--loglevel silent)
    semverLevel            find the highest version within "major" or "minor"
    greatest           find the highest versions available instead of the
                             latest stable versions
    upgradeAll         include even those dependencies whose latest
                             version satisfies the declared semver dependency
    removeRange            remove version ranges from the final package version
    timeout                a global timeout in ms





