// Documentation on theming Storybook: https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  // Branding
  brandTitle: 'Digital Styleguide for [Project Name]',
  brandUrl: 'https://www.zoocha.com',
  brandImage:
    'https://www.zoocha.com/themes/custom/zoocha/src/images/zoocha-logo.svg',
});
