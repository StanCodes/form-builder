/* eslint-disable @typescript-eslint/no-var-requires, import/order */
const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = 3000
const host = '0.0.0.0'

module.exports = (env) => {
    const isProd = env.ENV === 'prod'

    return {
        mode: isProd ? 'production' : 'development',
        entry: [path.resolve('src', 'index.tsx')],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProd ? '[name].[chunkhash].js' : '[name].[hash:8].js',
            chunkFilename: isProd ? '[id].[chunkhash].js' : '[id].[hash:8].js',
            sourceMapFilename: isProd ? '[name].[chunkhash].map' : '[name].[hash:8].map'
        },
        module: {
            rules: [
                {
                    test: /\.(jpe?g|png)$/i,
                    type: 'asset'
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'content/fonts/'
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.json', '.js'],
            modules: [path.join(__dirname, 'src'), 'node_modules'],
            preferRelative: true
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'src/public/images',
                        to: 'public/images',
                        noErrorOnMissing: true
                    }
                ]
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
                inject: 'body'
            })
        ],
        devtool: 'eval-cheap-source-map',
        devServer: {
            hot: true,
            host: host,
            port: port,
            historyApiFallback: true,
            headers: { 'Access-Control-Allow-Origin': '*' },
            static: {
                directory: path.resolve(__dirname, 'content'),
                publicPath: '/content'
            }
        }
    }
}
