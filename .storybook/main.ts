import type { StorybookConfig } from "@storybook/nextjs";
import tsPathsWebpackPlugin from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "storybook-addon-turbo-build",
      options: {
        optimizationLevel: 2,
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async webpackFinal(config) {
    config.resolve?.plugins?.push(new tsPathsWebpackPlugin());
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    config.module?.rules?.push(
      {
        ...fileLoaderRule,
        test: /\.svg?url$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );
    fileLoaderRule.exclude = /\.svg$/i
    return config;
  },
};
export default config;
