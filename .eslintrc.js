module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: './build/webpack.dev.js'
            }
        }
    },
    extends: ['plugin:vue/essential', 'plugin:prettier/recommended', 'airbnb-base'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "babel-eslint",
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        'prettier/prettier': 1,
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-underscore-dangle': 0,
        'no-plusplus': 0,
        "no-param-reassign": 0,
        'func-names': 0,
        'max-len': [
            'error',
            {
                code: 180
            }
        ],
        'no-use-before-define': 0,
        'no-unused-expressions': [
            2,
            {
                allowShortCircuit: true,
                allowTernary: false
            }
        ],
        'no-unused-vars': [
            2,
            {
                vars: 'local',
                args: 'none'
            }
        ],
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                vue: 'never'
            }
        ],
        semi: [0],
        //待改正
        'no-undef': 0,
        'comma-dangle': 0,
        camelcase: 0
        // 'object-curly-newline': 0
    }
};