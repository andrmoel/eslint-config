module.exports = {
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
    },
    'extends': [
        'google',
        'plugin:cypress/recommended',
    ],
    'plugins': [
        'babel',
        'import',
        'jest',
    ],
    'env': {
        'jest/globals': true,
        'node': true,
        'es6': true,
    },
    'globals': {
        'fail': 'readonly',
    },
    'rules': {
        'indent': [
            'error', 4, {
                'SwitchCase': 1,
            },
        ],
        'no-undef': 'error',
        'max-len': ['error', 120, 4],
        'space-infix-ops': [
            'error', {
                'int32Hint': false,
            },
        ],
        'padded-blocks': ['error', 'never'],
        'arrow-body-style': ['error', 'as-needed'],
        'prefer-arrow-callback': ['error'],
        'no-multiple-empty-lines': [
            'error', {
                'max': 1,
                'maxBOF': 0,
                'maxEOF': 0,
            },
        ],
        'lines-between-class-members': ['error', 'always'],
        'newline-before-return': 'error',
        'operator-linebreak': ['error', 'before'],
        'eqeqeq': ['error'],
        'require-jsdoc': [
            'error', {
                'require': {
                    'FunctionDeclaration': false,
                    'MethodDefinition': false,
                    'ClassDeclaration': false,
                    'ArrowFunctionExpression': false,
                    'FunctionExpression': false,
                },
            },
        ],
        'valid-jsdoc': [
            'error', {
                'prefer': {
                    'return': 'returns',
                },
                'requireReturn': false,
                'requireReturnDescription': false,
                'requireParamDescription': false,
            },
        ],
        'no-extra-semi': 'error',
        'no-invalid-this': 0,
        'babel/no-invalid-this': 1,
        'import/order': ['error'],
    },
};
