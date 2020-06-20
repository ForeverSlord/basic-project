const isProd = process.env.NODE_DEV === 'production';

module.exports = {
    module: {
        rules: [
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: !isProd,
                        }
                    },
                    'postcss-loader',
                    'stylus-loader',
                ],
            },
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: !isProd,
                        },
                    },
                ],
            },
        ],
    },
}