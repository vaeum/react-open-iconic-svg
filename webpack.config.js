var path = require("path");
var webpack = require("webpack");

var AUTOPREFIXER_BROWSERS = [
  "Android 2.3",
  "Android >= 4",
  "Chrome >= 35",
  "Firefox >= 31",
  "Explorer >= 9",
  "iOS >= 7",
  "Opera >= 12",
  "Safari >= 7.1"
];

module.exports = {
  devtool: "eval",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["react-hot", "babel"],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "postcss-loader", "sass"]
      }
    ]
  },
  postcss: function() {
    return [require("autoprefixer")({ browsers: AUTOPREFIXER_BROWSERS })];
  }
};
