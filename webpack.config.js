const path = require('path');

module.exports = {
  mode: 'development',
  entry: './application/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'application', 'static', 'scripts'),
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  }
};