module.exports = {
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint',
        'redundant-undefined',
    ],
    'extends': [
        'plugin:@typescript-eslint/recommended',
    ],
    'rules': {
        'semi': 'off',
        'no-extra-semi': 'off',
        'no-unused-vars': 'off',
        'redundant-undefined/redundant-undefined': 'error',
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/space-infix-ops': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/array-type': [
            'error',
            {
                'default': 'generic',
            },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {'ignoreRestSiblings': true}],
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                'selector': 'default',
                'format': [
                    'camelCase',
                ],
            },
            {
                'selector': 'variable',
                'format': [
                    'camelCase',
                    'UPPER_CASE',
                ],
            },
            {
                'selector': 'variable',
                'format': null,
                'modifiers': ['unused'],
                'custom': {
                    regex: '^_+$',
                    match: true,
                },
            },
            {
                'selector': [
                    'function',
                    'classMethod',
                ],
                'format': [
                    'camelCase',
                ],
                'leadingUnderscore': 'allow',
            },
            {
                'selector': 'objectLiteralProperty',
                'format': null,
            },
            {
                'selector': [
                    'typeLike',
                    'enumMember',
                ],
                'format': [
                    'PascalCase',
                ],
            },
        ],
    },
    'overrides': [
        {
            'files': [
                '*.ts',
                '*.tsx',
            ],
            'rules': {
                '@typescript-eslint/explicit-function-return-type': 'error',
                '@typescript-eslint/explicit-member-accessibility': 'error',
            },
        },
    ],
};
