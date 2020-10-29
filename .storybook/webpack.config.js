module.exports = {
    entry: './styles',
    output: {
      path: __dirname + '/dist',
      filename: 'build.js'
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        }
      ]
    },
    watch: true
  }


// const path = require('path');

// module.exports = async ({ config }) => {
//   // styles
//   config.module.rules.push({
//     test: /\.(sass|scss)$/,
//     use: ['resolve-url-loader'],
//     include: path.resolve(__dirname, '../')
//   });
//   // fonts
//   config.module.rules.push({
//     test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//     use: [
//       {
//         loader: 'file-loader',
//         query: {
//           name: '[name].[ext]'
//         }
//       }
//     ],
//     include: path.resolve(__dirname, '../')
//   });


//   return config;
// }
