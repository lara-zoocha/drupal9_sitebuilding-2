import React from 'react';
import template from './button.twig';

export default {
  title: 'Atoms/Button',
  argTypes: {
    button_content: {
      name: 'Title',
      description: 'Content of the button (typically text)',
      table: {
        type: { summary: 'string' },
      },
    },
    button_icon: {
      name: 'Icon',
      description: '',
      button_aria_label: 'Button with icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    button_type: {
      name: 'Type',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'inline-radio',
      },
      description: '',
      options: ['primary', 'secondary'],
    },
    button_aria_label: {
      name: 'Button aria-label | button_aria_label',
      description:
        "Optional aria-label. Only specific when there's no content, e.g. for an icon-only button",
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};
const Template = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: template({ ...args }),
    }}
  />
);

export const Button = Template.bind({});
Button.args = {
  button_content: 'Button',
  button_icon: true,
  button_aria_label: '',
  button_type: 'primary',
};
