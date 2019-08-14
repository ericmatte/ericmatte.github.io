const path = require("path");

/** Webpack config used to preprocess tailwind stylesheets only */
module.exports = (_env, _argv) => {
  const config = {
    mode: "development",

    entry: ["./src/App.scss"],

    output: {
      path: path.join(__dirname, "./src/"),
      filename: "../temp/artifacts.js" // Will always render an output .js file, so we put it in a temp folder since we don't use it.
    },

    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "tailwind.css"
              }
            },
            "extract-loader",
            "css-loader?-url",
            "postcss-loader",
            "sass-loader"
          ]
        }
      ]
    }
  };

  return config;
};
