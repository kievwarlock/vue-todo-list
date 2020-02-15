const ip = require("ip");
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const commonConfig = {
    mode: isProd ? 'production' : 'development',
    entry: {
        polyfill: '@babel/polyfill',
        webapp: path.join(__dirname, 'src', 'main.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].chunk.js'
    },
    resolve: {
        extensions: [ '.js', '.vue' ],
        alias: {
            '@': path.join(__dirname, 'src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    isProd
                        ? MiniCssExtractPlugin.loader
                        : 'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDev
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: (url, resourcePath, context) => {
                        const relativePath = path.relative(context, resourcePath);
                        const normalizedPath = relativePath.replace(/\\/g, '/');

                        return normalizedPath.replace('src/', '');
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            chunksSortMode: 'dependency'
        })
    ]
};

const devConfig = {
    devtool: 'cheap-module-eval-source-map',
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        compress: true,
        historyApiFallback: true,
        disableHostCheck: true,
        hot: true,
        open: true,
        overlay: true,
        host: ip.address(),
        port: 8000,
        stats: {
            normal: true
        }
    }
};

const prodConfig = {
    devtool: 'source-map',
    optimization: {
        runtimeChunk: 'single',
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: {
                                removeAll: true
                            }
                        }
                    ],
                }
            }),
            new TerserJSPlugin({})
        ],
        splitChunks: {
            chunks: 'async',
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendors~webapp',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css'
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            reportFilename: path.resolve(__dirname, 'report', 'bundle-report.html')
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'public'),
            to: path.resolve(__dirname, 'dist'),
            ignore: ["*.html"]
        }]),
    ]
};

module.exports = webpackMerge(
    commonConfig,
    isProd
        ? prodConfig
        : devConfig
);