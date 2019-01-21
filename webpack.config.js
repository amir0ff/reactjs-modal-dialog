const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/ModalComponent.jsx',
  output: {
    path: path.resolve('lib'),
    filename: 'ModalComponent.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
