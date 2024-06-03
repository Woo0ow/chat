import path from 'path';
import { Configuration } from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin'
interface EnvOptions {
   DEV: boolean,
   [key: string]: any
}

const config = (env: EnvOptions): Configuration => {
   console.log(env)
   console.log(process.env.NODE_ENV)
   const isDev = env.DEV || env.WEBPACK_SERVE
   return {
      mode: isDev ? 'development' : 'production',
      entry: './src/index.tsx',
      output: {
         path: path.resolve(__dirname, 'dist'),
         filename: isDev ? '[name].js' : '[name].[contenthash].js'
      },
      resolve: {
         extensions: ['.ts', '.tsx', '.js'],
      },
      module: {
         rules: [
            {
               test: /\.tsx?$/,
               use: 'ts-loader',
               exclude: /node_modules/,
            },
            {
               test: /\.css$/,
               use: ['style-loader', 'css-loader'],
            },
         ],
      },
      plugins: [
         new HtmlWebpackPlugin({
            template: './public/index.html',
         }),
      ],
      devServer: {
         port: 3000,
         allowedHosts:'all',
         static:{
            directory:path.resolve(__dirname,'dist')
         }
      },

   }

}
export default config;