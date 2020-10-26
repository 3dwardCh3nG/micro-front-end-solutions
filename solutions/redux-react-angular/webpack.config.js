const path = require('path');

module.exports = {
    entry: './react/index.js',
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        }
      ],
    },
    output: {
        path: path.resolve(__dirname, 'dist/redux/'),
        filename: 'react.js'
    }
};