import React from 'react';
import template from './image.twig';

export default {
  title: 'Atoms/Image',
  argTypes: {
    mobile_size: {
      name: 'Mobile size',
      description: 'Size of the image for mobile',
      table: {
        type: { summary: '[width]/[height]' },
        defaultValue: { summary: '100/100' },
      },
    },
    tablet_size: {
      name: 'Tablet size',
      description: 'Size of the image for tablet',
      table: {
        type: { summary: '[width]/[height]' },
        defaultValue: { summary: '200/200' },
      },
    },
    desktop_size: {
      name: 'Tablet size',
      description: 'Size of the image for desktop',
      table: {
        type: { summary: '[width]/[height]' },
        defaultValue: { summary: '300/300' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const ThumbnailImage = Template.bind({});
ThumbnailImage.args = {
  mobile_size: '100/100',
  tablet_size: '200/200',
  desktop_size: '300/300',
};
