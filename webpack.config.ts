import path from 'path';
import { Configuration } from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin'
interface EnvOptions {
   DEV: boolean,
   [key: string]: any
}
interface ExtendedConfiguration extends Configuration {
   devServer?: {
      port: number,
      allowedHosts: string,
      static: {
         directory: string
      }
   }
}
const config = (env: EnvOptions): ExtendedConfiguration => {
   const isDev = env.DEV || env.WEBPACK_SERVE
   return {
      mode: isDev ? 'development' : 'production',
      entry: './src/index.tsx',
      output: {
         path: path.resolve(__dirname, 'dist'),
         filename: isDev ? '[name].js' : '[name].[contenthash].js',
         assetModuleFilename: 'images/[hash][ext][query]'
      },
      resolve: {
         alias: {
            '@': path.resolve(__dirname, 'src')
         },
         extensions: ['.ts', '.tsx', '.js']
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
            {
               test: /\.s[ac]ss$/i,
               use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
               ],
            },
            {
               test: /\.png/,
               type: 'asset/resource'
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
         allowedHosts: 'all',
         static: {
            directory: path.resolve(__dirname, 'dist')
         }
      },

   }

}
export default config;