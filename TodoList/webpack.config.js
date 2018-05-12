var path = require('path');

module.exports = {
  entry: ['babel-polyfill', path.normalize(__dirname + '/src/index.js')],
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, './src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-3'],
            plugins: [
              'transform-runtime',
              require('babel-plugin-transform-object-rest-spread')
            ]
          }
        }
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src', 'css')],
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.twig$/,
        use: [
          'babel-loader',
          {
            loader: 'melody-loader',
            options: {
              plugins: ['idom']
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchOptions: {
      ignored: /node_modules/
    },
    overlay: false
  }
};
