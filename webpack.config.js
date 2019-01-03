const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractWebpackPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const smartMerge = require("webpack-merge");

module.exports = (env = {}) =>
  env.production ? smartMerge(common, production) : smartMerge(common, development);

const common = {
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

const development = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
};

const prod = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractWebpackPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  plugins: [
    new MiniCssExtractWebpackPlugin({})
  ]
}
