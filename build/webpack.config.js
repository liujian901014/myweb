module.exports = {
    // 入口
   entry: {
        build: './src/app'
    },
    // 输出
    output: {
        path: "./dist",
        publicPath: "/dist/",
        filename: "[name].js"
    },
    module: {
        // 加载器
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader' },
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
           
        ]
    },
    vue: {
        loaders: {
            css: 'style!css'
        }
    },
    babel: {
        presets: ['es2015','stage-3'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue']
    }
};
