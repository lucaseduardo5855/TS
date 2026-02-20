const path = require("node:path");

module.exports = {
  mode: 'development',
  entry: './src/A0018-webpack/index.ts',//arquivo de entrada no webpack
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js', //nome arquivo de saida 
    path: path.resolve(__dirname, 'dist', 'assets', 'js'), //local do arquivo de saida
  },
  devtool: 'source-map',
};