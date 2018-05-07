import * as React from 'react';

interface HeaderProps {
  showBackButton?: boolean;
  onBackToList(): void;
}

export const Header = (props: HeaderProps) => 
  <div className="c-header">
    <span className="c-header__logo">netflixroulette</span>
    {
      props.showBackButton 
        ? <button className="btn c-header__back-button"
            onClick={() => props.onBackToList()}>
            Search
          </button>
        : null
    }
  </div>
