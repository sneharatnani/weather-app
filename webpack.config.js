const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },

  plugins: [
    new Dotenv({
      systemvars: true,
    }),

    new HtmlWebpackPlugin({
      template: "./src/template.html",
      favicon: "./src/assets/favicon-32x32.png",
    }),
  ],

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
