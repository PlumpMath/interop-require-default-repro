import babel from 'rollup-plugin-babel'
import { castArray } from 'lodash'

export default {
  entry: 'index.js',
  format: 'cjs',
  dest: 'output-rollup.js', // equivalent to --output
  plugins: [
    babel({
      babelrc: false,
      presets: ['es2015-rollup'],
      plugins: [
        'transform-es3-property-literals',
        'transform-es3-member-expression-literals',
        'transform-object-assign',
      ],
    }),
  ]
}
