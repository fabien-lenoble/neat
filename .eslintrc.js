module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // "@vue/prettier",
    // "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'semi': 'error',
    'indent': ['error', 4],
    'no-trailing-spaces': 'error',
    'vue/script-indent': ['error', 4, { baseIndent: 0 }],
    'vue/html-indent': ['error', 4, { baseIndent: 1 }],
  },
};
