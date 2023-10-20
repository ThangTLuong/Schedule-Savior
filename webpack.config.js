const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './application/index.js',
    insert: './application/src/pages/insert-page.js',
  },
  output: {
    filename: '[name].bundle.js',
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