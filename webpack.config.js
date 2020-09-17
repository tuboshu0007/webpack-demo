const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPulgin = require('vue-loader/lib/plugin')

const VuetifyLoaderPlugin = require('./node_modules/vuetify-loader/lib/plugin')



module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        port: 2999,
        hot: true,
        contentBase: 'src',
        proxy: {
            '/api': {
                target: 'https://api.ixiaowai.cn',
                changeOrigin: true,
                ws: true,
            }
        }
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.vue$/, use: ['vue-loader'] },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPulgin(),
        new VuetifyLoaderPlugin()
    ],
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }

}