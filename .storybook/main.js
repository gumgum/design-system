module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@whitespace/storybook-addon-html/register',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-controls',
    '@storybook/preset-scss',
  ]
}
