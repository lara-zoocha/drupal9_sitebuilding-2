import React from 'react';
import template from './text.twig';

export default {
  title: 'Atoms/Forms/Text',
  argTypes: {
    text_title: {
      name: 'Input title',
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    text_description: {
      name: 'Input description',
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    text_error: {
      name: 'Error',
      description: 'Apply error display',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    text_type: {
      name: 'Type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
      control: {
        type: 'inline-radio',
      },
      description: 'Display text or textarea input',
      options: ['text', 'textarea'],
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

export const Text = Template.bind({});
Text.args = {
  text_title: 'Name',
  text_description: 'First, Middle, Last',
  text_error: false,
  text_type: 'text',
};
