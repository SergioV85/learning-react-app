import * as React from 'react';

interface ErrorBoundaryProps {
  errorMessage: string;
}
interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });
    console.error(error, info);
  }

  public render() {
    if (this.state.hasError) {
      return <h3 className="c-error-message">{this.props.errorMessage}</h3>;
    }
    return this.props.children;
  }
}