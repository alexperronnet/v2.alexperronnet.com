import antfu from '@antfu/eslint-config'

const eslintConfig = antfu({
  formatters: true,
  typescript: true,
  react: true,
  nextjs: true,
})

export default eslintConfig
