import React from 'react';
import template from './file.twig';

export default {
  title: 'Atoms/Forms/File',
  argTypes: {
    file_error: {
      name: 'Error',
      description: 'Apply error display',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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

export const File = Template.bind({});
File.args = {
  file_error: false,
};
