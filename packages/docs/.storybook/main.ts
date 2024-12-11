import type { StorybookConfig } from "@storybook/react-vite"
import { join, dirname } from "path"

/**
 * Esta função resolve o caminho absoluto de um pacote.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")))
}

const config: StorybookConfig = {
  stories: [
    "../src/pages/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = "/ALFA-UI/" // Corrige o valor base para produção
    }
    return config // Retorna a configuração ajustada
  },
}

export default config
