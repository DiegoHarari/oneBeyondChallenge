import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {Button} from './index';
import {test, expect} from '@jest/globals';

test('try mainbutton component functionality', () => {
  const {queryAllByA11yRole} = render(<Button />);
  const buttonQuery = queryAllByA11yRole('button');
  expect(buttonQuery).toHaveLength(1);
  const textQuery = queryAllByA11yRole('text');
  expect(textQuery).toHaveLength(1);
});
