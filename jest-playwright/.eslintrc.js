module.exports = {
    root: true,
    plugins: ['prettier'],
    extends: [
        'eslint:recommended',
        'prettier',
        'plugin:jest-playwright/recommended',
    ],
    rules: {
        'global-require': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-unresolved': 'off',
        'prettier/prettier': 'error',
    },
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true,
        },
    },
    env: {
        node: true,
        jest: true,
        browser: true,
    },
    globals: {
        page: true,
        browser: true,
        context: true,
    },
}
