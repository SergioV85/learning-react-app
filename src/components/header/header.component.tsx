import * as React from 'react';

interface IHeaderProps {
  showBackButton?: boolean;
  onBackToList(): void;
}
// tslint:disable:max-line-length
export const Header = (props: IHeaderProps) =>
  <div className='c-header'>
    <span className='c-header__logo'>netflixroulette</span>
    {props.showBackButton ? <button className='btn c-header__back-button' onClick={props.onBackToList}> Search </button> : null}
  </div>;
// tslint:enable:max-line-length
