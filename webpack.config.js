var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');


//console.log('1', JSON.stringify(process.env.API_KEY))
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
  //console.log('2', path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {console.log("3", e)}


module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOM: JSON.stringify(process.env.AUTH_DOM),
        DB_URL: JSON.stringify(process.env.DB_URL),
        DB_BUCKET: JSON.stringify(process.env.DB_BUCKET),
        GH_ACCESS_TOKEN: JSON.stringify(process.env.GH_ACCESS_TOKEN)
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
        './app/api',
      './app/compos',
    ],
  
    alias: {        app: 'app',
                    appscss: 'app/styles/app.scss',
                    actions: 'app/act/actions.jsx',
                    rdcrs: 'app/rdcr/rdcrs.jsx',
                    configStore: 'app/store/configStore.jsx'
                },
    
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: process.env.NODE_ENV === "production" ? undefined : 'cheap-module-eval-source-map'
};

console.log('4', JSON.stringify(process.env.NODE_ENV))
//console.log('5', JSON.stringify(process.env.API_KEY))