import React from 'react';
import template from './pager.twig';

export default {
  title: 'Molecules/Pager',
  argTypes: {
    pager__next_label: {
      name: 'Next label',
      description: 'Link text',
      table: {
        type: { summary: 'string' },
      },
    },
    pager__next_title: {
      name: 'Next title',
      description: 'Title of the next item',
      table: {
        type: { summary: 'string' },
      },
    },
    pager__prev_label: {
      name: 'Prev label',
      description: 'Link text',
      table: {
        type: { summary: 'string' },
      },
    },
    pager__prev_title: {
      name: 'Prev title',
      description: 'Title of the previous item',
      table: {
        type: { summary: 'string' },
      },
    },
    pager__uid: {
      table: {
        disable: true,
      },
    },
    pager__next_url: {
      table: {
        disable: true,
      },
    },
    pager__prev_url: {
      table: {
        disable: true,
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Pager = Template.bind({});
Pager.args = {
  pager__uid: 0,
  pager__next_url: '#',
  pager__next_label: 'Next',
  pager__next_title: 'Next item title',
  pager__prev_url: '#',
  pager__prev_label: 'Previous',
  pager__prev_title: 'Previous item title',
};
