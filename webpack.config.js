 const HtmlWebpckPlugin = require('html-webpack-plugin');
 
 module.exports = {
   output: {
     filename: 'app.bundle.js'
   },
   plugins: [
      new HtmlWebpckPlugin(
        {
          template: 'src/index.html'
        }
      )
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presents: [
                '@babel/preset-env',
                '@babel/preset-react',
              ]
            }
          }
        },
      ]
    }
 }
 