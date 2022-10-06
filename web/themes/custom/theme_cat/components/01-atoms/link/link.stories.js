import React from 'react';
import template from './link.twig';

export default {
  title: 'Atoms/Link',
  argTypes: {
    link_url: {
      name: 'Link url',
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    link_content: {
      name: 'Link content',
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    link_aria_label: {
      name: 'Link aria-label',
      description: 'Link aria-label',
      table: {
        type: { summary: 'string' },
      },
    },
    link_icon_name: {
      name: 'Link icon',
      description:
        'Add an icon name to display it within the link e.g. "chevron"',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Link = Template.bind({});
Link.args = {
  link_url: 'https://zoocha.github.io/storybook-starter-theme/',
  link_aria_label: 'This is the link aria-label',
  link_content: 'This is my link text',
  link_icon_name: '',
};
