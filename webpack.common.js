const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 1. نقطة البداية (ثابتة في الحالتين)
  entry: "./src/index.js",

  // 2. المخرجات الأساسية (المكان واسم الملف)
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  // 3. الإضافات الأساسية (إنشاء ملف HTML)
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],

  // 4. القواعد (كيفية التعامل مع الملفات المختلفة)
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
