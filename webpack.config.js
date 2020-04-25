const path = require('path');

module.exports = {
  entry: './src/app.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        type: 'javascript/auto',
        test: /\.mjs$/,
        use: [],
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    "isomorphic-fetch": "fetch"
  },
};