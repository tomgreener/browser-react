const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src",
  output: {
    filename: "client.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "./src/index.html", to: "", flatten: true }], {})
  ]
};
