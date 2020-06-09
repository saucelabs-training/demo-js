module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 12
            }
        }]
    ],
    plugins: ['@babel/plugin-proposal-private-methods']
}
