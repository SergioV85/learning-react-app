import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Header } from './header/header.component';

describe('Subtitle Snapshot', () => {
  const mockedBackToList = () => {};

  test('renders', () => {
    const component = renderer.create(
      <Header onBackToList={mockedBackToList} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});