const path = require("path");
const outputpath = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: outputpath,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: "url-loader",
        options: {
          limit: 2048,
          name: "./images/[name].[ext]",
        },
      },
    ],
  },
  devServer: {
    contentBase: outputpath,
  },
};
