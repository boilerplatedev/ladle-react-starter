import DefaultConfig from '@ladle/react/lib/shared/default-config'
import { Config } from '@ladle/react/lib/shared/types'

/**
 * @type {import('@ladle/react/lib/shared/types').Config}
 */
export default {
  ...DefaultConfig,
  stories: 'src/**/*.stories.{js,jsx,ts,tsx,mdx}',
}
