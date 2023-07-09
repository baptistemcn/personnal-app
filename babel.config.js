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
            "@i18n": "./src/i18n",
            "@theme": "./src/theme",
          },
          extensions: [".ts", ".tsx"],
        },
      ],
    ],
  };
};
