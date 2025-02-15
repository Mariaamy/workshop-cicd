import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser },
  rules: {semi: "warn"}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // {
  //   extends: ["eslint:recommended", "plugin:prettier/recommended"],
  //   rules: {
  //     quotes: ["error", "single"],
  //     "no-console": "error",
  //     curly: ["error", "all"]
  //   }
  // }
];