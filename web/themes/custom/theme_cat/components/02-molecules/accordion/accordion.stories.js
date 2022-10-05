import React from 'react';
import template from './accordion.twig';
import './accordion';

export default {
  title: 'Molecules/Accordion',
  argTypes: {
    accordion_title: {
      name: 'Title',
      description: 'Title of the accordion',
      table: {
        type: { summary: 'string' },
      },
    },
    accordion_content: {
      name: 'Content (HTML allowed)',
      description: 'Hidden content',
      table: {
        type: { summary: 'string/HTML' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Accordion = Template.bind({});
Accordion.args = {
  accordion_title: 'Accordion title',
  accordion_content:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
};
