const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = env => {
  return merge(common(env), {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      watchOptions: {
        ignored: /node_modules/
      },
      overlay: false
    }
  });
};
