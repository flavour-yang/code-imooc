module.exports = {
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    // "prettier",
    // "plugin:prettier/recommended",
  ],
  rules: {
    "consistent-return": 0, // 1
    "prefer-destructuring": 0, // 1
    "prefer-promise-reject-errors": 0, // 1
    "prefer-object-spread": 0, // 1
    "array-callback-return": 0, // 1
    "no-console": 0,
    "no-param-reassign": 0, // 给参数重新赋值
    "no-plusplus": 0, // 1
    "no-nested-ternary": 0, // 不允许三元表达式嵌套
    "no-loop-func": 0,
    "no-unneeded-ternary": 0,
    "no-shadow": 0,
    "react/jsx-curly-brace-presence": 0,
    "react/require-default-props": 0,
    "react/no-array-index-key": 0,
    "@typescript-eslint/dot-notation": 0,
    "@typescript-eslint/no-shadow": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-loop-func": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-unused-expressions": 0,
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
  },
};
