var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

module.exports.plugins = (module.exports.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"',
      __API__: '"http://217.61.3.120:8991/index.php"',
      __CLIENTID__: '"me7m66itmvq616qzbm78jqr1xp4akn"',
      __ACCEPT__: '"application/vnd.twitchtv.v5+json"',
      __KRAKEN__: '"https://api.twitch.tv/kraken"',
      __STREAMLINK__: '"Bearer me7m66itmg83kfvvq636qzbmxas78jqr1xp4akn"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true
  })
])

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        __API__: '"http://217.61.3.120:8991/index.php"',
        __CLIENTID__: '"me7m66itmvq616qzbm78jqr1xp4akn"',
        __ACCEPT__: '"application/vnd.twitchtv.v5+json"',
        __KRAKEN__: '"https://api.twitch.tv/kraken"',
        __STREAMLINK__: '"Bearer me7m66itmg83kfvvq636qzbmxas78jqr1xp4akn"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
