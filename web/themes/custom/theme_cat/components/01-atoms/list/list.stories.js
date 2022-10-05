import React from 'react';
import template from './list.twig';

export default {
  title: 'Atoms/List',
  argTypes: {
    list_type: {
      name: 'List type',
      description: 'Type of list - ordered or unordered',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ul' },
      },
      control: {
        type: 'inline-radio',
      },
      options: ['ul', 'ol'],
    },
    list_items: {
      name: 'List of items',
      description: '',
      table: {
        type: { summary: 'array' },
      },
    },
    list_style: {
      name: 'Additional list style',
      description: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
      control: {
        type: 'inline-radio',
      },
      options: ['none', 'inline', 'unstyled'],
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const List = Template.bind({});
List.args = {
  list_type: 'ul',
  list_items: [
    {
      content: 'Item 1',
    },
    {
      content: 'Item 2',
    },
    {
      content: 'Item 3',
    },
  ],
  list_style: 'none',
};
