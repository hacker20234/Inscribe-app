{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:react/jsx-runtime",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "react/require-default-props": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "consistent-return": "off",
    "react/jsx-props-no-spreading": ["error", { "exceptions": ["Input", "FileInput", "Textarea", "Select"] }]
  }
}
