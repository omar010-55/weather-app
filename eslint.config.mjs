import js from "@eslint/js"
import globals from "globals"
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "warn",
    },
  },
  globalIgnores([
    "**/dist",
    "**/node_modules/",
    ".config/*",
    "webpack.dev.js",
    "webpack.prod.js",
    "webpack.common.js",
  ]),
])
