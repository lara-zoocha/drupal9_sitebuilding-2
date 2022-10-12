import React from 'react';
import template from './definition-list.twig';

export default {
  title: 'Atoms/Definition List',
  argTypes: {
    dl_items: {
      name: 'List of items',
      description: '',
      table: {
        type: { summary: 'array' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const DefinitionList = Template.bind({});
DefinitionList.args = {
  dl_items: [
    {
      dl_term: 'This is a term',
      dl_def:
        'This is the definition of that term, which both live in a <code>dl</code>',
    },
    {
      dl_term: 'Here is another term',
      dl_def: 'And it gets a definition too, which is this line',
    },
    {
      dl_term: 'Here is one last term',
      dl_def: 'With the final definition',
    },
  ],
};
