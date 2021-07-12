import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Options from '../components/Options';

describe('Options', () => {
  it('should render', () => {
    expect(render(<Options />)).toBeTruthy();
  });
});
