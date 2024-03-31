module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        'one-var': 0,
        'id-length': 'off',
        'array-element-newline': 'off',
        'padded-blocks': 'off',
        'quote-props': 'off',
        'capitalized-comments': 'off',
        'spaced-comment': 'off',
        'sort-keys': 'off',
        'arrow-body-style': 'off',
        'max-len': 'off',
        'no-magic-numbers': 'off',
        camelcase: 'off',
        'newline-per-chained-call': 'off',
        'function-call-argument-newline': 'off',
        'dot-location': 'off',
        'no-ternary': 'off',
        'multiline-ternary': 'off',
        'line-comment-position': 'off',
        'no-inline-comments': 'off',
        'object-property-newline': 'off',
        'function-paren-newline': 'off',
        'max-lines-per-function:': ['off', 'never'],
        'max-statements': 'off',
        'max-statements-per-line': 'off',
        'no-implicit-coercion': 'off',
        'object-shorthand': 'off',
        'max-lines': 'off',
        'no-trailing-spaces': 'error',
        'react/no-unescaped-entities': 'off',
        indent: ['error', 4],
        'linebreak-style': 'off',
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'jsx-quotes': ['error', 'prefer-single'],
        'no-multi-spaces': [
            'error',
            {
                ignoreEOLComments: true
            }
        ],
        'react/prop-types': 'off',
        'object-curly-spacing': ['error', 'always'],
        'import/no-unresolved': 'error',
        'comma-dangle': 'error',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true
            }
        ],
        'import/order': [
            'error',
            {
                'newlines-between': 'always-and-inside-groups',
                distinctGroup: false,
                groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
                // pathGroups: [
                //     {
                //         pattern: 'components',
                //         group: 'internal'
                //     },
                //     {
                //         pattern: 'utils',
                //         group: 'internal'
                //     },
                //     {
                //         pattern: 'lib',
                //         group: 'internal'
                //     }
                // ],
                pathGroupsExcludedImportTypes: ['internal'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            }
        ],
        'import/newline-after-import': ['error', { count: 1 }],
        'import/no-relative-packages': 'error',
        'import/no-duplicates': ['error'],
        '@typescript-eslint/no-var-requires': ['error', { allow: ['tailwindcss'] }]
    },
    settings: {
        react: {
            version: 'detect' // React version. "detect" automatically picks the version you have installed.
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            },
            typescript: {} // this loads <rootdir>/tsconfig.json to eslint
        }
    }
}
