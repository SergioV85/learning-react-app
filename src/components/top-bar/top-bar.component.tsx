import * as React from 'react';

interface ITopbarProps {
  showBackButton?: boolean;
  onBackToList(): void;
}
// tslint:disable:max-line-length
export const Topbar = (props: ITopbarProps) =>
  <div className='c-topbar'>
    <span className='c-topbar__logo'>netflixroulette</span>
    {props.showBackButton ? <button className='btn c-topbar__back-button' onClick={props.onBackToList}> Search </button> : null}
  </div>;
// tslint:enable:max-line-length
