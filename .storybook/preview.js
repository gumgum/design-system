import '!style-loader!css-loader!resolve-url-loader!sass-loader!./styles.scss';
import { addDecorator } from '@storybook/html';

import { withHTML } from '@whitespace/storybook-addon-html/html';
addDecorator(withHTML);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
