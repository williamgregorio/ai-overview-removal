const CopyPlugin = require("copy-webpack-plugin");
module.exports = (_, argv) => {
  const mode = () => {
    if (argv.mode === "production") {
      return "production";
    }
    return "development";
  }

  const devtool = mode() === "development" ? "inline-source-map" : false;
  return {
    mode: mode(),
    devtool: devtool,
    entry: {
      popup: "./src/popup/popup.ts"
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    output: {
      filename: "[name].bundle.js",
      clean: true,
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "manifest.json", to: "manifest.json"},
          { from: "src/popup/popup.html", to: "popup/popup.html"},
          { from: "rules_gen_24.json", to: "rules_gen_24.json"}
        ],
      }),
    ],
  }
}   
