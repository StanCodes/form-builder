module.exports = {
    trailingComma: 'none',
    semi: false,
    tabWidth: 4,
    singleQuote: true,
    jsxSingleQuote: true,
    plugins: ['@trivago/prettier-plugin-sort-imports'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderCaseInsensitive: true,
    importOrder: [
        'App',
        '^components/(.*)$',
        '^config/(.*)$',
        '^modules/(.*)$',
        '^services/(.*)$',
        '^styles/(.*)$',
        '^types/(.*)$',
        '^utils/(.*)$',
        '^[./]'
    ],
    printWidth: 120,
    endOfLine: 'auto',
    arrowParens: 'always',
    bracketSpacing: true
}
