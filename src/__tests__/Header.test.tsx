import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('should render', () => {
    expect(
      render(
        <HashRouter>
          <Header />
        </HashRouter>
      )
    ).toBeTruthy();
  });
});
