const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
mode:"development",
  entry: "./src",
  output: {
    path: path.join(__dirname, "public/assets"),
    filename: "app.js"
  },
  devServer: {
    static: "./public"
  },
  module:{
    rules:[{
        test:/\.js$/,
        exclude: /node_modules/,
        use:{
            loader:`babel-loader`,
            options:{
                presets: ['@babel/preset-env']
            }
        }
    }]
  }
  
}
