const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ["./src/client/index.tsx"],
  output: {
    path: path.join(__dirname, "build/client"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".jsx"],
  },
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    proxy: {
      "/api/**": {
        target: "http://localhost:8080",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      title: "decafe",
    }),
  ],
};
