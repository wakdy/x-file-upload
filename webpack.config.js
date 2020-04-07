const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',

  /**
   * 根据不同的目录名称，打包生成目标 js，名称和目录名一致
   */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle1.js',
  },

  // watch:true,
  // watchOptions:{
  //   ignored:'/node_modules/',
  //   aggregateTimeout:300,
  //   poll:1000
  // },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      }
    ]
  },

  devServer:{
    port:8088,
    progress:true,
    contentBase:path.resolve(__dirname, 'dist'),
    open:true,
    compress:true,
    hot:true,
    proxy:{
      
      '/upload':{
        target: 'http://localhost:3000',
       
        changeOrigin: true,
       
    }
    }

  },

  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './src/assets/images/favicon.ico'
    }),
    new VueLoaderPlugin()

  ]
}
