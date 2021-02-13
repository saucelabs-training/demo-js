module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'lts'
      }
    }]
  ],
  plugins: ['@babel/plugin-proposal-private-methods']
}
