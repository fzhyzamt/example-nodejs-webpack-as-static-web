module.exports = {
    root: true,
    rules: {
        // 规则帮助文档：https://cn.eslint.org/docs/rules/
        "no-debugger": "error", // 禁止在打包时包含debugger，线上需要debug时直接打断点即可
        "max-len": [
            "error",
            {
                code: 120,
                ignoreUrls: true,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
    },
    overrides: [
        {
            "files": ["webpack.config.js"],
            "rules": {
                "@typescript-eslint/no-var-requires": "off"
            }
        }
    ],
    parser: "@typescript-eslint/parser",
    env: {
        browser: true, //浏览器环境中的全局变量。
        node: true, //Node.js 全局变量和 Node.js 作用域。
        es6: true, //启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
    },
    plugins: [
        "@typescript-eslint"
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ]
}