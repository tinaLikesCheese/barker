module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
      rules: [
          {
              test: /\.jsx$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/preset-react', '@babel/preset-env']
              }
          }, 
          {
              test: /\.css$/,
              use: [{
                  loader: 'style-loader'
                  },
                  {
                  loader: 'css-loader',
                  options: {
                      modules: {
                          localIdentName: '[name]__[local]__[hash:base64:5]'
                      }
                  }
              }],
          }
      ]
  },
  output: {
      filename: 'bundle.js',
      path: __dirname + '/client/dist'
  }
}; 