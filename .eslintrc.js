module.exports = {
    env: {
        node: true,
    },
    plugins: ['prettier'],
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        '@vue/prettier',
        '@vue/eslint-config-prettier',
        'plugin:prettier-vue/recommended',
    ],
    rules: {
        'prettier/prettier': ['error', { singleQuote: true }],
    }
}
