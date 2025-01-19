import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";



// eslint.config.mjs
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');



/** @type {import('eslint').Linter.Config[]} */
export default [

  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        process: "readonly",
      },
    }
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error"
    },
  },
];
