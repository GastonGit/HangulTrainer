import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Menu from '../components/Menu';

describe('Menu', () => {
  it('should render', () => {
    expect(
      render(
        <HashRouter>
          <Menu />
        </HashRouter>
      )
    ).toBeTruthy();
  });
});
