module.exports = ctx => {
  const isProduction = ctx.env === "production";
  const plugins = [
    require("postcss-easy-import")({ prefix: "_" }),
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-flexbugs-fixes")
  ];

  if (isProduction) {
    plugins.push(
      require("cssnano")({
        preset: "default"
      })
    );
  }

  return {
    parser: "postcss-scss",
    plugins
  };
};
