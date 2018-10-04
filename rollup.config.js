import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  entry: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    serve({
      open: true,
      contentBase: ['dist', 'public']
    }),
    livereload({ 
      watch: ['dist', 'public']
    })
  ]
}
