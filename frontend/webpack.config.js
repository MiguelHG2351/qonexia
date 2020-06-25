
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const Workbox = require("workbox-webpack-plugin")

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

// const workbox = new Workbox.GenerateSW({
//       // these options encourage the ServiceWorkers to get in there fast
//       // and not allow any straggling "old" SWs to hang around
//       clientsClaim: true,
//       skipWaiting: true,
//     })

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
    ],
  },
  plugins: [htmlPlugin],
};