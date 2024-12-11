module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended",
  ],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["react"],

  rules: {
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/prop-types": "off",
    "no-nested-ternary": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
  },

  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src"], // Ensure @ maps correctly to the source folder
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"], // Add all file types you want to support
      },
      node: {
        paths: ["."],
      },
    },
  },
};
