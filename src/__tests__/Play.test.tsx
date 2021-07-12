import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Play from '../components/Play';

describe('Play', () => {
  it('should render', () => {
    expect(render(<Play />)).toBeTruthy();
  });
});
