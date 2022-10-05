import React from 'react';
import template from './card.twig';
import './card';

export default {
  title: 'Molecules/Card',
  argTypes: {
    card_title: {
      name: 'Title',
      description: 'Title of the card',
      table: {
        type: { summary: 'string' },
      },
    },
    card_date: {
      name: 'Date',
      description: 'Date format: j d M Y',
      table: {
        type: { summary: 'string' },
      },
    },
    card_sub_title: {
      name: 'Subtitle',
      description: 'Subtitle of the card',
      table: {
        type: { summary: 'string' },
      },
    },
    card_text: {
      name: 'Text',
      description: 'Body of the card, usually HTML markup created in a WYSIWYG',
      table: {
        type: { summary: 'HTML markup' },
      },
    },
    card_image_src: {
      name: 'Image',
      description:
        'Url of the image, image block can be replaced by lazy loaded image',
      table: {
        type: { summary: 'string' },
      },
    },
    card_link_url: {
      table: {
        disable: true,
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Card = Template.bind({});
Card.args = {
  card_date: 'Wed 08 Sep 2021',
  card_title: 'Card title',
  card_sub_title: 'Card sub title',
  card_text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  card_link_url: '#',
  card_image_src:
    'https://i.picsum.photos/id/302/720/560.jpg?hmac=rlt3xSx7IxnixPOoBX6_RG4RyMdEzmxkqwMTMCVef9M',
};
