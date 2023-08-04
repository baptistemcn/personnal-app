module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@api": "./src/api",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@i18n": "./src/i18n",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@theme": "./src/theme",
            "@types": "./src/types",
          },
          extensions: [".ts", ".tsx"],
        },
      ],
    ],
  };
};
