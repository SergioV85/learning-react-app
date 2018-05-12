import * as React from 'react';
import { shallow } from 'enzyme';
import { ErrorBoundary } from './error-boundary.component';

describe('Error Boundary component', () => {
  const errorBoundaryComponent = shallow(
    <ErrorBoundary errorMessage="Some error"><span>Normal text</span></ErrorBoundary>
  );
  const errorBoundaryInstance = errorBoundaryComponent.instance() as ErrorBoundary;
  describe('componentDidCatch', () => {
    beforeAll(() => {
      errorBoundaryInstance.componentDidCatch({ error: 'error' }, {});
    });
    it('should change the state', () => {
      expect(errorBoundaryComponent.state().hasError)
        .toBeTruthy();
    });
  });
  describe('Error state', () => {
    beforeAll(() => {
      errorBoundaryComponent.setState({ hasError: true });
    });
    afterAll(() => {
      errorBoundaryComponent.setState({ hasError: false });
    });
    it('should render error message', () => {
      expect(errorBoundaryComponent.text())
        .toMatch(/Some error/);
    });
  });
  describe('Normal state', () => {
    it('should render children', () => {
      expect(errorBoundaryComponent.text())
        .toMatch(/Normal text/);
    });
  });
});