import * as React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () =>
  <div className='c-not-found'>
    <h2 className='c-not-found__title'>Sorry, page not found.</h2>
    <p className='c-not-found__back-link'><Link to='/'>Return to homepage</Link></p>
  </div>
  ;
