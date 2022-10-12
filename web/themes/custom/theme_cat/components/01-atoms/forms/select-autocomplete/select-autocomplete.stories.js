import React from 'react';
import { useEffect } from '@storybook/client-api';

import selectAutocompleteTwig from './select-autocomplete.twig';
import selectAutocompleteData from './select-autocomplete.yml';

import './select-autocomplete';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Forms' };

export const selectAutocomplete = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: selectAutocompleteTwig(selectAutocompleteData),
      }}
    />
  );
};
