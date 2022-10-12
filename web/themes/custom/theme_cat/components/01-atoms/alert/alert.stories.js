import React from 'react';
import template from './alert.twig';

export default {
  title: 'Atoms/Alert',
  argTypes: {
    alert_content: {
      name: 'Alert content',
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    alert_type: {
      name: 'Type',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'inline-radio',
      },
      description: '',
      options: ['info', 'warning', 'danger', 'notice', 'policy'],
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Alert = Template.bind({});
Alert.args = {
  alert_content:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  alert_type: 'info',
};
