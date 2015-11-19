var webpack = require('webpack')

module.exports = {

  output: {
    library: 'react-animated.css',
    libraryTarget: 'umd'
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?stage=0&loose=all' }
    ]
  },

  node: {
    Buffer: false
  }

}
