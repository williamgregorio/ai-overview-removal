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
      popup: "./src/popup/popup.js"
    },
    output: {
      filename: "[name].bundle.js",
      clean: true,
    }

  }
}
