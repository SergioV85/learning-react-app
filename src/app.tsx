import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Routes } from './routes';

import { Footer } from './components/footer/footer.component';
import './styles.scss';

export class App extends React.Component {
  public render() {
    return (
      <div className='c-page'>
        <Routes />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

export const AppContainer =
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(App) as any,
  );
