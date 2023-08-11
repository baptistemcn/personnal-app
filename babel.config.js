module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@functions": "./src/functions",
            "@hooks": "./src/hooks",
            "@i18n": "./src/i18n",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@theme": "./src/theme",
            "@types": "./src/types",
            "@ui": "./src/ui",
          },
          extensions: [".ts", ".tsx"],
        },
      ],
    ],
  };
};
