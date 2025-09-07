// See https://nextjs.org/docs/app/api-reference/config/eslint#running-lint-on-staged-files for details

import path from 'node:path'
import process from 'node:process'

function buildEslintCommand(filenames) {
  return `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`
}

/** @type {import('lint-staged').Configuration} */
const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.{md,html,css}': 'prettier --write',
}

export default lintStagedConfig
