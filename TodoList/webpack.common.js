const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
  if(typeof env === 'undefined') {
    env = { filter: false };
  }
  return {
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
          use: [
            {
              loader: 'babel-loader',
              query: {
                presets: ['env', 'stage-3'],
                plugins: [
                  'transform-runtime',
                  require('babel-plugin-transform-object-rest-spread')
                ]
              }
            },
            {
              /* Custom loader to set filters ON by default when env.filter is set */
              loader: path.resolve('./utils/loaders/filter-loader.js'),
              options: {
                enableFilter: env.filter
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          include: [path.resolve(__dirname, 'src', 'scss')],
          loader: ExtractTextPlugin.extract({
            use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }],
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
    plugins: [
      new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true })
    ]
  };
};
