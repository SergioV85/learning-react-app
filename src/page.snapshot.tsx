import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Subtitle } from './components/component';

describe('Subtitle Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(
      <Subtitle />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});