module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // The two below should be added when using type-ware eslint, telling the parser the directory root & where to find the tsconfig.json file
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["jest-dom", "testing-library", "@typescript-eslint"],
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  // Type-aware linting will throw error on .js/.jsx files so do ignore them here. Can also use .eslintignore, but VS Code is not aware of that file
  ignorePatterns: ["*.js", "*.jsx", "reportWebVitals.ts"],
};
