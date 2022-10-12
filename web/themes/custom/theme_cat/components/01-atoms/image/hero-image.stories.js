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
        defaultValue: { summary: '580/300' },
      },
    },
    tablet_size: {
      name: 'Tablet size',
      description: 'Size of the image for tablet',
      table: {
        type: { summary: '[width]/[height]' },
        defaultValue: { summary: '900/400' },
      },
    },
    desktop_size: {
      name: 'Tablet size',
      description: 'Size of the image for desktop',
      table: {
        type: { summary: '[width]/[height]' },
        defaultValue: { summary: '1920/500' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const HeroImage = Template.bind({});
HeroImage.args = {
  mobile_size: '580/300',
  tablet_size: '900/400',
  desktop_size: '1920/500',
};
