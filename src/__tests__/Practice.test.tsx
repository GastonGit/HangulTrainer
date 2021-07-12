import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Practice from '../components/Practice';

describe('Practice', () => {
  it('should render', () => {
    expect(render(<Practice />)).toBeTruthy();
  });
});
