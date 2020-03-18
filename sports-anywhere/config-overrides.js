const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // {
      //   test: /\.(woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [{
      //     loader: 'file-loader',
      //   }],
      // },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   use: [{
      //     loader: 'file-loader',
      //   }],
      // },
    ]
  },
  // plugins: [
  //   new CleanWebpackPlugin('build', {}),
  //   new MiniCssExtractPlugin({
  //     filename: 'style.[contenthash].css',
  //   }),
  // ],
}