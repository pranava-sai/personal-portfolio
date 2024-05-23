// Add this at the top of your babel.config.js or .babelrc file
module.exports = {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }]
    ],
    plugins: [
      ['@babel/plugin-transform-react-jsx', {
        runtime: 'automatic',
        importSource: '@emotion/react' // or whatever the library you need to target
      }]
    ]
  };
  