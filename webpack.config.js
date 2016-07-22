var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  
  entry: {
     "main": "./src/main.js"
  },
  output: {
    filename: "build.js"
  },
  module: {
    loaders: [
      {test: /.css$/, loader: 'style!css'},
      {test: /.(png|jpg)$/, loader: 'url?limit=8192'},
      {test: /\.less$/,
        loader: ExtractTextPlugin.extract(
            'css?sourceMap!' +
            'less?sourceMap'
        )}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // 内联css提取到单独的styles的css
  plugins: [new ExtractTextPlugin('styles.css')]
};