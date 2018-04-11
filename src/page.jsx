import React from 'react';

import { Subtitle } from './components/component';
import { CourseName } from './components/pure-component';
import { Author } from './components/functional.component'

const title = React.createElement(
  'h1',
  {
    id: 'id_001',
    className: 'page-title',
    key: '001',
  },
  'Hello World, simple element!'
);

const Page = () => (
  <div>
    { title }
    <Subtitle />
    <CourseName courseName="ReactJs Global Mentoring Program" />
    <Author author="Serhii Vozniak" mentor="Maksym Barbul" />
  </div>
);

Page.displayName = 'Page'

export { Page };