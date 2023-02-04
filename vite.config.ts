import {AliasOptions, defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
const getAlias = (aliases: string[]): AliasOptions =>
  aliases.map((alias) => ({
    find: alias,
    replacement: path.resolve(__dirname, 'src', alias),
  }))

const alias: AliasOptions = getAlias([
  'components',
  'utils',
  'assets',
  'views',
  'store',
  'router',
  'interfaces',
  'layouts'
])
export default defineConfig({
  plugins: [vue({
    reactivityTransform: true
  })],
  resolve: {
    alias
  }
})
