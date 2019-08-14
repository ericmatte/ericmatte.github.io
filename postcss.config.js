module.exports = _ctx => {
  const plugins = [require("tailwindcss"), require("autoprefixer"), require("postcss-flexbugs-fixes")];

  return {
    plugins
  };
};
