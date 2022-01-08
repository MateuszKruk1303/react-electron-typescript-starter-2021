var path = require('path')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  },
  entry: './electron/main.ts',
  module: {
    rules: require('./rules.webpack'),
  },
}
