const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    vendor: [
      'babel-polyfill',
      'melody-component',
      'melody-hoc',
      'melody-redux',
      'melody-parser',
      'melody-traverse',
      'melody-idom',
      'redux'
    ],
    bundle: [path.normalize(__dirname + '/src/index.js')]
  },
  output: {
    filename: '[name].js',
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
          query: {
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
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            }
          ],
          // use style-loader in development
          fallback: 'style-loader'
        })
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
  plugins: [new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true })]
};
