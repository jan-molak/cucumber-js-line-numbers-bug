const common = `--publish-quiet -f @cucumber/pretty-formatter --require ./features/support/steps.js`;

module.exports = {
    'relative': `${ common } ./features/example.feature:3`,
    'absolute': `${ common } ${ __dirname }/features/example.feature:3`,
}
