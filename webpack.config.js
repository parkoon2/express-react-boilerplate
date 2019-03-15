const path = require('path')

module.exports = (env, argv) => {

    const mode = argv.mode

    return ({
        entry: './index.js',

        target: 'node',

        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'index.bundle.js'
        },

        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    use: 'babel-loader'
                }
            ]
        },

        mode,
    })
}