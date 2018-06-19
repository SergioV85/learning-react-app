import * as React from 'react';

interface IErrorBoundaryProps {
  errorMessage: string;
}
interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(err: any) {
    // tslint:disable-next-line:no-console
    console.log('ErrorBoundary -> componentDidCatch', err);
    this.setState({ hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      return <h3 className='c-error-message'>{this.props.errorMessage}</h3>;
    }
    return this.props.children;
  }
}
