module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]'
    },
    'postcss-preset-env': {
      features: { 'nesting-rules': false }
    },
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}
